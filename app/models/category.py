from .db import db

class Category(db.Model):
  __tablename__ = 'categories'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(50), nullable = False, unique = True)
  titles = db.Column(db.ARRAY, nullable = False)
  imgs = db.Column(db.ARRAY, nullable = False)
  description = db.Column(db.ARRAY, nullable = False)
  # description = db.Column(db.ARRAY(db.String()), nullable = False)
