from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FieldList, MultipleFileField, TextAreaField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
   user_id = IntegerField('user id', [DataRequired()])
   title = StringField('title', [DataRequired()])
   user_id = IntegerField('user id', [DataRequired()])
   category_id = IntegerField('category id')
   keywords = FieldList(StringField('keywords'))
   intro_imgs = MultipleFileField('images')
   intro = TextAreaField('intro')