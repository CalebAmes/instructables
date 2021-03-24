from app.models import db, Step


def seed_steps():
    step1 = Step(step_count=1, project_id=1, step_imgs=['asdfa', 'aaaa'],
                 step="This is the first step to my project")
    step2 = Step(step_count=2, project_id=1, step_imgs=['asdgasd', 'asdaf'],
                 step="This is the second step to my project")
    step3 = Step(step_count=3, project_id=1, step_imgs=['asgdasdg', 'asdfasdf'],
                 step="This is the third step to my project")
    step4 = Step(step_count=4, project_id=1, step_imgs=['asdgasd', 'asfa'],
                 step="This is the fourth step to my project")
    step5 = Step(step_count=5, project_id=1, step_imgs=['asdasgd', 'asdg'],
                 step="This is the fifth step to my project")

    db.session.add(step1)
    db.session.add(step2)
    db.session.add(step3)
    db.session.add(step4)
    db.session.add(step5)

    db.session.commit()


def undo_steps():
    db.session.execute('TRUNCATE steps CASCADE')
    db.session.commit()
