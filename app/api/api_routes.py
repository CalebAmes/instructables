from flask import Blueprint, request
from app.models.db import db

from app.models import Comment, Category, Step, User, Project, Favorite, Build
# from app.models.user import User, Project, user_favorites
from app.helpers import *
from app.forms.project_form import ProjectForm
from app.forms.step_form import StepForm
from flask_login import current_user, login_required

api_routes = Blueprint('/api', __name__)


@api_routes.route("/projects", methods=['GET'])
def api_projects_all():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}


@api_routes.route('/projects/category/<int:categoryId>', methods=['GET'])
def api_projects_category(categoryId):
    projects = db.session.query(Project).filter_by(category_id=categoryId)
    return {"projects": [project.to_dict() for project in projects]}


@api_routes.route('/projects/<int:projectId>', methods=['GET'])
def api_projects_one(projectId):
    project = db.session.query(Project).get(projectId)
    return project.to_dict()


@api_routes.route("/categories", methods=['GET'])
def api_categories_all():
    categories = Category.query.all()
    return {"category": [category.to_dict() for category in categories]}


@api_routes.route("/comments/<int:projectId>", methods=['GET'])
def api_comments_all(projectId):
    print(projectId)
    comments = Comment.query.filter_by(project_id=projectId).all()
    return {"comments": [comment.to_dict() for comment in comments]}


@api_routes.route('/steps/<int:projectId>', methods=['GET'])
def api_projects_steps(projectId):
    steps = db.session.query(Step).filter_by(project_id=projectId)
    return {"steps": [step.to_dict() for step in steps]}


@api_routes.route('/projects', methods=['POST'])
@login_required
def api_create_project():
    data = request.get_json()
    img = [data['intro_imgs']]
    project = Project(user_id=current_user.id, title=data['title'], category_id=data['category_id'],
                      keywords=data['keywords'], intro_imgs=img, intro=data['intro'])
    db.session.add(project)
    db.session.commit()

    return project.to_dict()


@api_routes.route('/steps', methods=['POST'])
def api_create_one_step():
    data = request.get_json()
    img = [data['step_imgs']]
    step = Step(step_count=data['step_count'],
                project_id=data['project_id'], step_imgs=img, step=data['step'])
    db.session.add(step)
    db.session.commit()
    return step.to_dict()


@api_routes.route('/steps-all/<int:projectId>', methods=['POST'])
def api_create_all_steps(projectId):
    data = request.get_json()
    steps = data['steps']
    # (db.session.add(Step(step_count=step['step_count'],
    #                      project_id=projectId, step_img=step['step_img'], step=step['step'])), db.session.commit) for step in steps
    for i in range(len(steps)):
        currentStep = steps[i]
        step = Step(step_count=currentStep['step_count'],
                    project_id=projectId, step_imgs=currentStep['step_imgs'], step=currentStep['step'])
        db.session.add(step)
    db.session.commit()
    result = db.session.query(Step).filter_by(project_id=projectId)
    return {"steps": [step.to_dict() for step in result]}


@api_routes.route('/comments/<int:userId>/<int:projectId>', methods=['POST'])
def api_create_comment(userId, projectId):
    data = request.get_json()
    print(data)
    comment = Comment(
        comment=data['comment'], upvotes=data['upvotes'], user_id=userId, project_id=projectId)
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()


# still need to make this put route
@api_routes.route('/edit-project/<int:projectId>', methods=['PUT'])
def api_edit_project(projectId):
    project = db.session.query(Project).get(projectId)
    data = request.get_json()
    return project.to_dict()


@api_routes.route('/steps/<int:stepId>', methods=['DELETE'])
def api_delete_step(stepId):
    try:
        step = db.session.query(Step).get(stepId)
        db.session.delete(step)
        db.session.commit()
    except:
        return "unsuccessful"
    return "successful"


@api_routes.route('/projects/<int:projectId>', methods=['DELETE'])
def api_delete_project_and_steps(projectId):
    try:
        steps = db.session.query(Step).filter_by(project_id=projectId)
        for step in steps:
            db.session.delete(step)
        db.session.commit()

        project = db.session.query(Project).get(projectId)
        db.session.delete(project)
        db.session.commit()
    except:
        return "unsuccessful"
    return "successful"


@api_routes.route('/comments/<int:commentId>', methods=['DELETE'])
def api_delete_comment(commentId):
    try:
        comment = db.session.query(Comment).get(commentId)
        db.session.delete(comment)
        db.session.commit()
    except:
        return "unsuccessful"
    return "successful"


@api_routes.route('/user/favorites/<int:userId>/<int:projectId>', methods=['POST'])
def api_add_user_favorite(userId, projectId):
    if Favorite.query.filter_by(user_id=userId, project_id=projectId).all() == []:
        favorite = Favorite(user_id=userId, project_id=projectId)
        db.session.add(favorite)
        db.session.commit()
        return "successful"
    else:
        return "unsuccessful"


@api_routes.route('/user/favorites/<int:userId>/<int:projectId>', methods=['DELETE'])
def api_remove_user_favorite(userId, projectId):
    if Favorite.query.filter_by(user_id=userId, project_id=projectId).all() == []:
        return "unsuccessful"
    else:
        favorites = Favorite.query.filter_by(
            user_id=userId, project_id=projectId).all()
        for favorite in favorites:
            db.session.delete(favorite)
            db.session.commit()
        return "success"


@ api_routes.route('/user/favorites/<int:userId>', methods=['GET'])
def api_get_favorites_for_user(userId):
    projects = Favorite.query.filter_by(user_id=userId)
    return {"favorites": [project.to_dict() for project in projects]}


@ api_routes.route('/project/favorites/<int:projectId>', methods=['GET'])
def api_get_project_favorites(projectId):
    projects = Favorite.query.filter_by(project_id=projectId)
    return {"favorites": [project.to_dict() for project in projects]}


# project builds
@api_routes.route('/user/builds/<int:userId>/<int:projectId>', methods=['POST'])
def api_add_user_build(userId, projectId):
    if Build.query.filter_by(user_id=userId, project_id=projectId).all() == []:
        build = Build(user_id=userId, project_id=projectId)
        db.session.add(build)
        db.session.commit()
        return "successful"
    else:
        return "unsuccessful"


@api_routes.route('/user/builds/<int:userId>/<int:projectId>', methods=['DELETE'])
def api_remove_user_build(userId, projectId):
    if Build.query.filter_by(user_id=userId, project_id=projectId).all() == []:
        return "unsuccessful"
    else:
        builds = Build.query.filter_by(
            user_id=userId, project_id=projectId).all()
        for build in builds:
            db.session.delete(build)
            db.session.commit()
        return "success"


@api_routes.route('/user/builds/<int:userId>', methods=['GET'])
def api_get_build_for_user(userId):
    builds = Build.query.filter_by(user_id=userId)
    return {"builds": [build.to_dict() for build in builds]}


@api_routes.route('/project/builds/<int:projectId>', methods=['GET'])
def api_get_project_builds(projectId):
    builds = Build.query.filter_by(project_id=projectId)
    return {"builds": [build.to_dict() for build in builds]}
