from flask import Blueprint


api_routes = Blueprint('api', __name__, url_prefix="/api")


@api_routes.route("/projects", methods=['GET'])
def api_projects_all():
    projects = db.session.query(Project)
    # maybe add in .all
    return jsonify(projects)
