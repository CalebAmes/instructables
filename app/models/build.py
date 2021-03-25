from .db import db


class Build(db.Model):
    __tablename__ = 'builds'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey(
        "projects.id"), nullable=False)

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "project_id": self.project_id,
        }
