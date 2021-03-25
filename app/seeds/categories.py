from app.models import db, Category


def seed_categories():

    category1 = Category(name="Circuits", titles=["LET'S MAKE NOISE", "LET'S MAKE LIGHT", "LET'S MAKE SPARKS"], imgs=[
                         "https://cdn.instructables.com/ORIG/FW9/RRO5/JW0Y4BNF/FW9RRO5JW0Y4BNF.jpg", 
                         "https://content.instructables.com/ORIG/FK5/IO80/KM0LGO9Y/FK5IO80KM0LGO9Y.jpg", 
                         "https://cdn.instructables.com/ORIG/FA9/YK49/JW0Y4BR5/FA9YK49JW0Y4BR5.jpg"], 
                         description="Welcome to the world's most awesome playground for all things making. Learn from the largest collection of how to step-by-step circuits projects anywhere")
    category2 = Category(name="Workshop", titles=["LET'S MAKE IT SOMETHING NEW", "LET'S MAKE METAL FLOWERS", "LET'S MAKE FURNITURE"], imgs=[
                         "https://content.instructables.com/ORIG/FBU/AMNF/K2UO7FKD/FBUAMNFK2UO7FKD.jpg", 
                         "https://content.instructables.com/ORIG/FPN/3AA7/KLTG93I7/FPN3AA7KLTG93I7.jpg", 
                         "https://content.instructables.com/ORIG/F3K/5IWN/JYYOJIDC/F3K5IWNJYYOJIDC.jpg"], 
                         description="Welcome to the world's most awesome playground for all things making. Learn from the largest collection of how to step-by-step workshop projects anywhere")
    category3 = Category(name="Craft", titles=["LET'S MAKE WITH ZIPPERS", "LET'S MAKE FIBER ART", "LET'S MAKE WITH PAPER"], imgs=[
                         "https://content.instructables.com/ORIG/FI1/A7TE/KMEVV1WD/FI1A7TEKMEVV1WD.jpg", 
                         "https://content.instructables.com/ORIG/F9O/K6CW/KM0LGTFH/F9OK6CWKM0LGTFH.jpg", 
                         "https://cdn.instructables.com/ORIG/FLF/FCZJ/JWB4AG4E/FLFFCZJJWB4AG4E.jpg"], 
                         description="Welcome to the world's most awesome playground for all things making. Learn from the largest collection of how to step-by-step craft projects anywhere")
    category4 = Category(name="Cooking", titles=["LET'S MAKE TINY TREATS", "LET'S MAKE PIE", "LET'S MAKE A CAFFEINE BOOST"], imgs=[
                         "https://content.instructables.com/ORIG/FDM/AZN5/KMKLM7CF/FDMAZN5KMKLM7CF.jpg", 
                         "https://content.instructables.com/ORIG/F64/EO2H/KLUVOM81/F64EO2HKLUVOM81.jpg", 
                         "https://cdn.instructables.com/ORIG/FZ7/YTMQ/JW6NTEZG/FZ7YTMQJW6NTEZG.jpg"], 
                         description="Welcome to the world's most awesome playground for all things making. Learn from the largest collection of how to step-by-step cooking projects anywhere")
    category5 = Category(name="Living", titles=["LET'S MAKE POK´EMON", "LET'S MAKE GARDENING FUN", "LET'S MAKE FOR PETS"], imgs=[
                         "https://content.instructables.com/ORIG/FEI/MVL2/KMGBADMD/FEIMVL2KMGBADMD.jpg", 
                         "https://content.instructables.com/ORIG/FSW/DE7R/KM0LGO9Z/FSWDE7RKM0LGO9Z.jpg", 
                         "https://cdn.instructables.com/ORIG/FWA/HI38/JWB4D2YH/FWAHI38JWB4D2YH.jpg"], 
                         description="Welcome to the world's most awesome playground for all things making. Learn from the largest collection of how to step-by-step living projects anywhere")
    category6 = Category(name="Outside", titles=["LET'S MAKE A BOAT", "LET'S MAKE RIDABLE ART", "LET'S MAKE IT FLY"], imgs=[
                         "https://content.instructables.com/ORIG/FA2/XI3D/KMGBALQA/FA2XI3DKMGBALQA.jpg", 
                         "https://content.instructables.com/ORIG/F9Y/8YBX/KM0LGOB3/F9Y8YBXKM0LGOB3.jpg", 
                         "https://cdn.instructables.com/ORIG/FBG/LLAE/J3UF8U5R/FBGLLAEJ3UF8U5R.jpg"], 
                         description="Welcome to the world's most awesome playground for all things making. Learn from the largest collection of how to step-by-step outside projects anywhere")


    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)


    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()
