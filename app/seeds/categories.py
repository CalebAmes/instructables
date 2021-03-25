from app.models import db, Category


def seed_categories():

    category1 = Category(name="Circuits", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], description="THis is my description")
    category2 = Category(name="Workshop", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], description="THis is my description")
    category3 = Category(name="Craft", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], description="THis is my description")
    category4 = Category(name="Cooking", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], description="THis is my description")
    category5 = Category(name="Living", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], description="THis is my description")
    category6 = Category(name="Outside", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], description="THis is my description")

    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    # db.session.add(category7)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()
