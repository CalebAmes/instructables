from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FieldList, MultipleFileField, TextAreaField
from wtforms.validators import DataRequired

class ProjectForm(FlaskForm):
   user_id = IntegerField('user id', [DataRequired()])
   title = StringField('title', [DataRequired()])
   user_id = IntegerField('user id', [DataRequired()])
   keywords = FieldList(StringField('keywords', [DataRequired()]))
   intro_imgs = MultipleFileField('images', [DataRequired()])
   intro = TextAreaField('intro', [DataRequired()])