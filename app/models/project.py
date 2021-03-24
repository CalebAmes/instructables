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
    intro_imgs = db.Column(postgresql.ARRAY(db.Text))
    intro = db.Column(db.Text)

    steps = db.relationship("Step")
    # , back_populates="projects", cascade="all, delete", passive_deletes=True
    comments = db.relationship("Comment")

    # users = db.relationship(
    #     "User", secondary=user_favorites, back_populates="projects")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "keywords": self.keywords,
            "intro_imgs": self.intro_imgs,
            "intro": self.intro
        }
