from .db import db
from sqlalchemy.dialects import postgresql


class Step(db.Model):
    __tablename__ = "steps"

    id = db.Column(db.Integer, primary_key=True)
    step_count = db.Column(db.Integer, nullable=False)
    step_title = db.Column(db.String(50))
    project_id = db.Column(db.Integer, db.ForeignKey(
        "projects.id", ondelete="CASCADE"))
    step_imgs = db.Column(postgresql.ARRAY(db.Text))
    step = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'step_count': self.step_count,
            'project_id': self.project_id,
            'step_imgs': self.step_imgs,
            'step': self.step,
        }
