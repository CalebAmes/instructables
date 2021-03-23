from app.models import db, Project


def seed_projects():
    project1 = Project(user_id=1, title="My Super Awesome Project", category_id=1, keywords=[
                       "cool projects", "awesome projects"], intro_img="https://content.instructables.com/ORIG/FBM/XCG6/KLXQKKGA/FBMXCG6KLXQKKGA.png?auto=webp&crop=1.2%3A1&frame=1&width=306", intro="This is a really cool porject I made that makes a robot")

    db.session.add(project1)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects CASCADE;')
    db.session.commit()
