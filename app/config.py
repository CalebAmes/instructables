import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=False
  SQLALCHEMY_DATABASE_URI=os.environ.get('DATABASE_URL')
  SQLALCHEMY_ECHO=True
  export S3_BUCKET = os.environ.get('S3_BUCKET')
  export S3_KEY = os.environ.get('S3_KEY')
  export S3_SECRET = os.environ.get('S3_SECRET')
  S3_LOCATION = 'http://{}.s3.amazonaws.com/'.format(S3_BUCKET)