from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

# types = [
#     ('Hobbyist', 'hobbyist'),
#     ('Student', 'student'),
#     ('Teacher', 'teacher'),
#     ('Parent', 'parent')
#     ('Professional', 'professional'),
#     ('Robot','robot')
# ]

def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    avatar = FileField('upload an avatar')
    bio = TextAreaField('tell us about yourself')
    password = StringField('password', validators=[DataRequired()])

