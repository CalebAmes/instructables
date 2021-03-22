from app.models import db, Favorite


def seed_favorites():

    favorite1 = Favorite(user_id=1, project_id=1)

    db.session.add(favorite1)

    db.session.commit()


def undo_favorites():
    db.session.execute('TRUNCATE favorites')
    db.session.commit()
