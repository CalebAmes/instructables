from flask import Blueprint, request
from app.models import db, Image
from flask_login import current_user, login_required
from app.helpers import *

image_routes = Blueprint("images", __name__)


@image_routes.route("/intro", methods=["POST"])
@login_required
def upload_intro_image():
      if 'intro_img' not in request.files:
            return {'errors': 'intro image required'}, 400
        
      image = request.files['intro_img']
      image.filename = get_unique_filename(image.filename)
            
      upload = upload_file_to_s3(image)
      if "url" not in upload:
        return upload, 400

      upload = upload['url']
    
      image = Image(
         user_id=current_user.id, 
         type='intro',
         url=upload
         )

      db.session.add(image)
      db.session.commit()
      return {"url": upload}

@image_routes.route("/steps", methods=["POST"])
@login_required
def upload_step_image():
      if 'step_img' not in request.files:
            upload = ''
      else:  
         image = request.files['step_img']
         image.filename = get_unique_filename(image.filename)
               
         upload = upload_file_to_s3(image)
         if "url" not in upload:
            return upload, 400
         
         upload = upload['url']
    
      image = Image(
         user_id=current_user.id, 
         type='step',
         url=upload
         )

      db.session.add(image)
      db.session.commit()
      return {"url": upload}
