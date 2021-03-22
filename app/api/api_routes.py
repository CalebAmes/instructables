from flask import Blueprint, jsonify
from app.models.db import db
from app.models import Project
import json

api_routes = Blueprint('/api', __name__)


@api_routes.route("/projects", methods=['GET'])
def api_projects_all():
    print("laksjdflkasjkdflfkdsjlk")
    # projects = db.session.query(Project).all()
    # print(projects.to_dict())
    projects = Project.query.all()
    # print("_________________________________________", projects[0].title)
    # p = {"projects": [project.to_dict() for project in projects]}
    # print(p)
    return {"projects": [project.to_dict() for project in projects]}
