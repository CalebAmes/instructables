from app.models import db, Category


def seed_categories():

    category1 = Category(name="Cooking", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=[
                         "adslgj", "skal", "fdsjakl"], descriptions=["ajksdfh", "dsalfkj", "afdjskl"])

    db.session.add(category1)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()
