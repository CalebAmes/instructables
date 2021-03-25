from app.models import db
from app.models import Project


def seed_projects():
    project1 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project2 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FUZ/8G5D/KMJ67IX2/FUZ8G5DKMJ67IX2.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project3 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FLI/RKA2/KMALJJ5D/FLIRKA2KMALJJ5D.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project4 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FNA/5E35/KMJ66ZYS/FNA5E35KMJ66ZYS.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project5 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F7B/5TFH/KM963O1T/F7B5TFHKM963O1T.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project6 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F2K/UREE/KM963N07/F2KUREEKM963N07.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project7 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F1L/XCMB/KM20W9U5/F1LXCMBKM20W9U5.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project8 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FRD/X3CR/KLXQKBS6/FRDX3CRKLXQKBS6.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project9 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZM/UZ77/KLUVP1HA/FZMUZ77KLUVP1HA.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project10 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZM/LZMX/KLS0SDA0/FZMLZMXKLS0SDA0.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project11 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FSI/MIET/KLNQLN6O/FSIMIETKLNQLN6O.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project12 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F3U/9TIH/KLP5ZHZE/F3U9TIHKLP5ZHZE.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project13 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FSC/I4F2/KLP5XUIT/FSCI4F2KLP5XUIT.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project14 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F25/9GPL/KLP601HJ/F259GPLKLP601HJ.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project15 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FWQ/ANPQ/KLMB25GY/FWQANPQKLMB25GY.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project16 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FOA/Z94N/KLMB13GF/FOAZ94NKLMB13GF.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project17 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FML/CLHY/KLMB178K/FMLCLHYKLMB178K.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project18 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F55/X2DV/KLLA7B8O/F55X2DVKLLA7B8O.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project19 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FKU/CNEN/KLKVM9KI/FKUCNENKLKVM9KI.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project20 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F0I/KGMI/KLKVLGHC/F0IKGMIKLKVLGHC.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project21 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZ7/FLMW/KLGLBIW3/FZ7FLMWKLGLBIW3.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project22 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F7H/IYVG/KLGLAS3C/F7HIYVGKLGLAS3C.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project23 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project24 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project25 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project26 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project27 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project28 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project29 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project30 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
              
            

    db.session.add(project1)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects CASCADE;')
    db.session.commit()
