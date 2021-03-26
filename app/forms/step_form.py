from flask_wtf import FlaskForm
from wtforms import MultipleFileField, StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired

class StepForm(FlaskForm):
   step_count = IntegerField('step count', [DataRequired()])
   project_id = IntegerField('project id', [DataRequired()])
   step_title = StringField('step title', [DataRequired()])
   step_imgs = MultipleFileField('step images')
   step = TextAreaField('step', [DataRequired()])
   # pass