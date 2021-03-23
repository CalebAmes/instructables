from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.dialects import postgresql


user_favorites = db.Table(
    "user_favorites",
    db.Column("user_id", db.Integer, db.ForeignKey(
        "users.id"), primary_key=True),
    db.Column("project_id", db.Integer, db.ForeignKey(
        "projects.id"), primary_key=True)
)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    avatar = db.Column(db.Text)
    bio = db.Column(db.String(1000))
    hashed_password = db.Column(db.String(255), nullable=False)

    projects = db.relationship("Project")
    comments = db.relationship("Comment")

    favoriteProjects = db.relationship(
        "Project", secondary=user_favorites)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "favoriteProjects": [project.to_dict() for project in self.favoriteProjects]
        }


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
