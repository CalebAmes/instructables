from app.models import db, Category


def seed_categories():

    category1 = Category(name="Cooking", titles=["asdfa", "asdkfj", "ajsdhf"], imgs=["adslgj", "skal", "fdsjakl"], descriptions=["ajksdfh", "dsalfkj", "afdjskl"])

    # category1 = Category(name="Cooking")
    # category1.titles = "title1"
    # category1.titles = "title2"
    # category1.titles = "title3"
    # category1.imgs = "img-url1"
    # category1.imgs = "img-url2"
    # category1.imgs = "img-url3"
    # category1.descriptions = "description1"
    # category1.descriptions = "description2"
    # category1.descriptions = "description3"

    db.session.add(category1)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories;')
    db.session.commit()
