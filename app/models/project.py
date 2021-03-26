from .db import db
from sqlalchemy.dialects import postgresql


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String(255))
    category_id = db.Column(db.Integer, db.ForeignKey(
        "categories.id"))

    keywords = db.Column(postgresql.ARRAY(db.String(30)))
    intro_imgs = db.Column(postgresql.ARRAY(db.Text))
    intro = db.Column(db.Text)

    steps = db.relationship("Step")

    comments = db.relationship("Comment")

    builds = db.relationship("Build")
    favorites = db.relationship("Favorite")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "category_id": self.category_id,
            "keywords": self.keywords,
            "intro_imgs": self.intro_imgs,
            "intro": self.intro,
            # "favoriteIds": [project.id for project in self.favorites],
            # "builds": [project.id for project in self.builds]
        }
