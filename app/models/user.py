from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import enum

# class Types(enum.Enum):
#     Hobbyist = 'hobbyist'
#     Student = 'student'
#     Teacher = 'teacher'
#     Parent = 'parent'
#     Professional = 'professional'
#     Robot = 'robot'



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
            "email": self.email
        }
