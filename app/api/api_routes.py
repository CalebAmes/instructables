from flask import Blueprint, jsonify
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
