from .db import db


class Image(db.Model):
   __tablename__ = 'images'
   id = db.Column(db.Integer, primary_key=True) 
   user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
   type = db.Column(db.String(30), nullable=False)
   url = db.Column(db.Text, nullable=False)