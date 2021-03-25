from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demoa', email='demo@demo.com',
                password='password')
    demo1 = User(username='Spaskisaspwesep', email="schneider.maye@thompson.biz",
                password='password')
    demo2 = User(username='lindseycakez8t', email="czemlak@bauch.com",
                password='password')
    demo3 = User(username='scoooooobixi', email="lexi21@kunze.com",
                password='password')
    demo4 = User(username='zvezanega8k', email="daphney.volkman@gmail.com",
                password='password')
    demo5 = User(username='Cisiec2e', email="edyth.franecki@mante.com",
                password='password')
    demo6 = User(username='estuyajuan3c', email="greichel@gmail.com",
                password='password')
    demo7 = User(username='kadaravouu', email="melisa.ankunding@hotmail.com",
                password='password')
    demo8 = User(username='teteh24', email="schulist.emmalee@yahoo.com",
                password='password')
    demo9 = User(username='Tovarurodiao9', email="angela.labadie@gmail.com",
                password='password')
    demo10 = User(username='objectifreach', email="mylene.pfannerstill@yahoo.com",
                password='password')
    demo11 = User(username='Gwalia27', email="lesch.serenity@williamson.org",
                password='password')
    demo12 = User(username='examinandtd', email="keshawn.oberbrunner@casper.com",
                password='password')
    demo13 = User(username='Armottics', email="ipollich@nolan.com",
                password='password')
    demo14 = User(username='fousserr104d', email="mayert.lucas@haley.biz",
                password='password')
    demo15 = User(username='Salehieval0', email="imelda.windler@koelpin.info",
                password='password')
    demo16 = User(username='contrepointl1', email="harber.audrey@yahoo.com",
                password='password')
    demo17 = User(username='ramblog0w', email="drew.bednar@hotmail.com",
                password='password')
    demo18 = User(username='torraindx', email="allan48@yahoo.com",
                password='password')
    demo19 = User(username='divkaes', email="julius73@torphy.biz",
                password='password')
    demo20 = User(username='Sandgrundd7', email="anahi27@kuhn.com",
                password='password')
    demo21 = User(username='mascluda9r', email="akub@gmail.com",
                password='password')

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo19)
    db.session.add(demo20)
    db.session.add(demo21)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
