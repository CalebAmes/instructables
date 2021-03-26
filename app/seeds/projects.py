from app.models import db
from app.models import Project


def seed_projects():
    project1 = Project(user_id=1, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project2 = Project(user_id=15, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FUZ/8G5D/KMJ67IX2/FUZ8G5DKMJ67IX2.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project3 = Project(user_id=2, title="DIY Outdoor Table With Fire Pit OR Cooler!", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FLI/RKA2/KMALJJ5D/FLIRKA2KMALJJ5D.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project4 = Project(user_id=6, title="How to Make a Stock Tank Pool! Easy DIY Backyard Pool", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FNA/5E35/KMJ66ZYS/FNA5E35KMJ66ZYS.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project5 = Project(user_id=13, title="Heart Bird Feeder", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F7B/5TFH/KM963O1T/F7B5TFHKM963O1T.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project6 = Project(user_id=4, title="Really Awesome Creation", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F2K/UREE/KM963N07/F2KUREEKM963N07.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project7 = Project(user_id=5, title="A Really Cool Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F1L/XCMB/KM20W9U5/F1LXCMBKM20W9U5.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project8 = Project(user_id=7, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FRD/X3CR/KLXQKBS6/FRDX3CRKLXQKBS6.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project9 = Project(user_id=9, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZM/UZ77/KLUVP1HA/FZMUZ77KLUVP1HA.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project10 = Project(user_id=10, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZM/LZMX/KLS0SDA0/FZMLZMXKLS0SDA0.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project11 = Project(user_id=11, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FSI/MIET/KLNQLN6O/FSIMIETKLNQLN6O.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project12 = Project(user_id=18, title="My Super Awesome Project", category_id=5, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F3U/9TIH/KLP5ZHZE/F3U9TIHKLP5ZHZE.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project13 = Project(user_id=21, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FSC/I4F2/KLP5XUIT/FSCI4F2KLP5XUIT.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project14 = Project(user_id=15, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F25/9GPL/KLP601HJ/F259GPLKLP601HJ.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project15 = Project(user_id=3, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FWQ/ANPQ/KLMB25GY/FWQANPQKLMB25GY.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project16 = Project(user_id=20, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FOA/Z94N/KLMB13GF/FOAZ94NKLMB13GF.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project17 = Project(user_id=5, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FML/CLHY/KLMB178K/FMLCLHYKLMB178K.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project18 = Project(user_id=9, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F55/X2DV/KLLA7B8O/F55X2DVKLLA7B8O.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project19 = Project(user_id=19, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FKU/CNEN/KLKVM9KI/FKUCNENKLKVM9KI.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project20 = Project(user_id=11, title="My Super Awesome Project", category_id=2, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F0I/KGMI/KLKVLGHC/F0IKGMIKLKVLGHC.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project21 = Project(user_id=10, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZ7/FLMW/KLGLBIW3/FZ7FLMWKLGLBIW3.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project22 = Project(user_id=16, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F7H/IYVG/KLGLAS3C/F7HIYVGKLGLAS3C.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project23 = Project(user_id=1, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FM9/06X8/KL55REL4/FM906X8KL55REL4.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project24 = Project(user_id=7, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F54/AOSE/KL3QC945/F54AOSEKL3QC945.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project25 = Project(user_id=9, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FVY/IOKC/KL3QBVSU/FVYIOKCKL3QBVSU.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project26 = Project(user_id=3, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F7N/KH2P/KL3QBNXW/F7NKH2PKL3QBNXW.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project27 = Project(user_id=5, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FH4/HP2O/KL3QBON2/FH4HP2OKL3QBON2.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project28 = Project(user_id=21, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBF/QMUD/KL55RHWY/FBFQMUDKL55RHWY.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project29 = Project(user_id=13, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FOQ/CJ4K/KL2AYZBA/FOQCJ4KKL2AYZBA.png", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project30 = Project(user_id=18, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FS1/16DT/KKV5OJ2D/FS116DTKKV5OJ2D.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project31 = Project(user_id=3, title="My Super Awesome Project", category_id=3, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FED/V0W0/KKML2VM0/FEDV0W0KKML2VM0.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project32 = Project(user_id=4, title="My Super Awesome Project", category_id=3, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FZ9/6UIR/KKO4DED0/FZ96UIRKKO4DED0.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project33 = Project(user_id=9, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FBV/UQE1/KKML2T9V/FBVUQE1KKML2T9V.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project34 = Project(user_id=6, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F4F/B0L3/KKL5LYLZ/F4FB0L3KKL5LYLZ.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project35 = Project(user_id=16, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/F01/HINH/KKFFUME8/F01HINHKKFFUME8.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project36 = Project(user_id=17, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FV1/JB7G/KKE0EXQU/FV1JB7GKKE0EXQU.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project37 = Project(user_id=20, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FQW/OKD6/KJZPZFTQ/FQWOKD6KJZPZFTQ.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project38 = Project(user_id=3, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FQR/NEL4/KJWV42IW/FQRNEL4KJWV42IW.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project39 = Project(user_id=8, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FJN/FI6K/KJVFP3US/FJNFI6KKJVFP3US.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    project40 = Project(user_id=10, title="My Super Awesome Project", category_id=6, keywords=[
                       "cool projects", "awesome projects"], intro_imgs=["https://content.instructables.com/ORIG/FRY/84Y8/KJWV3FAA/FRY84Y8KJWV3FAA.jpg", "img-url-2"], intro="This is a really cool porject I made that makes a robot")
    
                
              
            

    db.session.add(project1)
    db.session.add(project2)
    db.session.add(project3)
    db.session.add(project4)
    db.session.add(project5)
    db.session.add(project6)
    db.session.add(project7)
    db.session.add(project8)
    db.session.add(project9)
    db.session.add(project10)
    db.session.add(project11)
    db.session.add(project12)
    db.session.add(project13)
    db.session.add(project14)
    db.session.add(project15)
    db.session.add(project16)
    db.session.add(project17)
    db.session.add(project18)
    db.session.add(project19)
    db.session.add(project20)
    db.session.add(project21)
    db.session.add(project22)
    db.session.add(project23)
    db.session.add(project24)
    db.session.add(project25)
    db.session.add(project26)
    db.session.add(project27)
    db.session.add(project28)
    db.session.add(project29)
    db.session.add(project30)
    db.session.add(project31)
    db.session.add(project32)
    db.session.add(project33)
    db.session.add(project34)
    db.session.add(project35)
    db.session.add(project36)
    db.session.add(project37)
    db.session.add(project38)
    db.session.add(project39)
    db.session.add(project40)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects CASCADE;')
    db.session.commit()
