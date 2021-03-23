from app.models import db, Comment


def seed_comments():

    comment1 = Comment(comment="Really awesome project, I tried to make this and it came out so good!!!",
                       upvotes=4, user_id=1, project_id=1)

    db.session.add(comment1)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments CASCADE;')
    db.session.commit()
