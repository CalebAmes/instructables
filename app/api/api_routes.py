from flask import Blueprint, request
from app.models.db import db
from app.models import Project, Comment, Category, Step


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


@api_routes.route('/projects/<int:userId>/<int:categoryId>', methods=['POST'])
def api_create_project(userId, categoryId):
    data = request.get_json()
    project = Project(user_id=userId, title=data['title'], category_id=categoryId,
                      keywords=data['keywords'], intro_img=data['intro_img'], intro=data['intro'])
    db.session.add(project)
    db.session.commit()

    return project.to_dict()


@api_routes.route('/steps/<int:projectId>', methods=['POST'])
def api_create_one_step(projectId):
    data = request.get_json()
    step = Step(step_count=data['step_count'],
                project_id=projectId, step_img=data['step_img'], step=data['step'])
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
                    project_id=projectId, step_img=currentStep['step_img'], step=currentStep['step'])
        db.session.add(step)
    db.session.commit()
    result = db.session.query(Step).filter_by(project_id=projectId)
    return {"steps": [step.to_dict() for step in result]}


@api_routes.route('/comments/<int:userId>/<int:projectId>', methods=['POST'])
def api_create_comment(userId, projectId):
    data = request.get_json()
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