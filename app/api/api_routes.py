from flask import Blueprint, jsonify
from app.models.db import db
from app.models import Project, Comment, Category
import json

api_routes = Blueprint('/api', __name__)


@api_routes.route("/projects", methods=['GET'])
def api_projects_all():
    projects = Project.query.all()
    return {"projects": [project.to_dict() for project in projects]}

@api_routes.route("/category", methods=['GET'])
def api_categories_all():
    categories = Category.query.all()
    return {"category": [category.to_dict() for category in categories]}

@api_routes.route("/comment", methods=['GET'])
def api_comments_all():
    comments = Comment.query.all()
    return {"comment": [comment.to_dict() for comment in comments]}