from .db import db
from sqlalchemy.dialects import postgresql


class Step(db.Model):
    __tablename__ = "steps"

    id = db.Column(db.Integer, primary_key=True)
    step_count = db.Column(db.Integer, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"))
    step_img = db.Column(db.Text)
    step = db.Column(db.Text)
