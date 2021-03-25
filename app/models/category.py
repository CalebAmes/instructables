from .db import db
from sqlalchemy.dialects import postgresql
# from sqlalchemy.orm import relationship


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    titles = db.Column(postgresql.ARRAY(db.String(50)))
    imgs = db.Column(postgresql.ARRAY(db.String(50)))
    description = db.Column(db.String(200))

    categories = db.relationship("Project")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'titles': self.titles,
            'imgs': self.imgs,
            'description': self.description,
        }

    # _titles = db.Column(db.String)
    # _imgs = db.Column(db.String)
    # _descriptions = db.Column(db.String)
    # @property
    # def titles(self):
    #     return [str(x) for x in self._ratings.split(';')]
    # @titles.setter
    # def titles(self, value):
    #     self._titles += ';%s' % value

    # @property
    # def imgs(self):
    #     return [str(x) for x in self._ratings.split(';')]
    # @imgs.setter
    # def titles(self, value):
    #     self._imgs += ';%s' % value

    # @property
    # def descriptions(self):
    #     return [str(x) for x in self._ratings.split(';')]
    # @descriptions.setter
    # def descriptions(self, value):
    #     self._descriptions += ';%s' % value
