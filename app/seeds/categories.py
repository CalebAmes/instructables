from app.models import db, Category


def seed_categories():

    category1 = Category(name='Cooking', titles = ["Breakfast", "Lunch", "Dinner", "Banquet"],
                imgs=["img-url1", "img-url2", "img-url3", "img-url4"], descriptions=["d1", "d2", "d3", "d4"])

    db.session.add(category1)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories;')
    db.session.commit()
