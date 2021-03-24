from app.models import db, Step


def seed_steps():
    step1 = Step(step_count=1, project_id=1, step_img="img-url",
                 step="This is the first step to my project")
    step2 = Step(step_count=1, project_id=1, step_img="img-url",
                 step="This is the first step to my project")
    step3 = Step(step_count=1, project_id=1, step_img="img-url",
                 step="This is the first step to my project")
    step4 = Step(step_count=1, project_id=1, step_img="img-url",
                 step="This is the first step to my project")
    step5 = Step(step_count=1, project_id=1, step_img="img-url",
                 step="This is the first step to my project")

    db.session.add(step1)

    db.session.commit()


def undo_steps():
    db.session.execute('TRUNCATE steps CASCADE')
    db.session.commit()
