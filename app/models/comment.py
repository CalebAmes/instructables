from .db import db
from sqlalchemy.dialects import postgresql


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    upvotes = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"))

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'upvotes': self.upvotes,
            'user_id': self.user_id,
            'project_id': self.project_id,
        }
