from .db import db
from sqlalchemy.dialects import postgresql


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String(255))
    category_id = db.Column(db.Integer, db.ForeignKey(
        "categories.id"), nullable=False)
    keywords = db.Column(postgresql.ARRAY(db.String(30)))
    intro_img = db.Column(db.Text)
    intro = db.Column(db.Text)

    steps = db.relationship("Step")
    # , back_populates="projects", cascade="all, delete", passive_deletes=True
    comments = db.relationship("Comment")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "keywords": self.keywords,
            "intro_img": self.intro_img,
            "intro": self.intro
        }
