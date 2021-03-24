from app.models import db, Step


def seed_steps():
    step1 = Step(step_count=1, step_title="Making the Tentacles", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FXF/HIAQ/KMDGGKNI/FXFHIAQKMDGGKNI.jpg?auto=webp&frame=1&crop=3:2&width=798&height=1024&fit=bounds&md=490e7db2c7b51565bbbbb5356f9cdcde', 'https://content.instructables.com/ORIG/FKV/TMU9/KMDGGKNJ/FKVTMU9KMDGGKNJ.jpg?auto=webp&frame=1&crop=3:2&width=402&height=1024&fit=bounds&md=f380fc6f8c3965082179d032dce08894', 'https://content.instructables.com/ORIG/F4J/20YE/KMDGGKQA/F4J20YEKMDGGKQA.jpg?auto=webp&frame=1&width=402&height=1024&fit=bounds&md=018a108089666250e9deed9437bcfcc9'],
                 step="Cut out a tentacle Fold it in half with the template markings on the outside Tip: You can save some time by folding the tentacle in half, then cutting the rounded top part")

    step2 = Step(step_count=2, step_title="Poke the Holes", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FBH/P848/KMDGGKNW/FBHP848KMDGGKNW.jpg?auto=webp&frame=1&crop=3:2&width=800&height=1024&fit=bounds&md=ebd89561a731fc7e6ee714df64701608', 'https://content.instructables.com/ORIG/FN6/F5HU/KMDGGKNX/FN6F5HUKMDGGKNX.jpg?auto=webp&frame=1&crop=3:2&width=400&height=1024&fit=bounds&md=661f6ff312123246509493625e643c8c', 'https://content.instructables.com/ORIG/FTZ/S6YB/KMDGGKOA/FTZS6YBKMDGGKOA.jpg?auto=webp&frame=1&crop=3:2&width=400&height=1024&fit=bounds&md=41959e3179ba26dcc1f24a57863bd077'],
                 step="Use a sewing needle to make the holes in the marked locations Make sure to go through both layers of paper")

    step3 = Step(step_count=3, step_title="Invert the Tentacle", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F39/TJF0/KMDGGKOB/F39TJF0KMDGGKOB.jpg?auto=webp&frame=1&crop=3:2&width=800&height=1024&fit=bounds&md=d9efd9cef6c77c9bb2794c4567add8be', 'https://content.instructables.com/ORIG/FY9/KGGD/KMDGGKOW/FY9KGGDKMDGGKOW.jpg?auto=webp&frame=1&crop=3:2&width=400&height=1024&fit=bounds&md=76f36f8fc26150815dee4a6c5f0b211d', 'https://content.instructables.com/ORIG/FBJ/RKK8/KMDGGKP9/FBJRKK8KMDGGKP9.jpg?auto=webp&frame=1&crop=3:2&width=400&height=1024&fit=bounds&md=a83f630a63f987f788197c4d771be67d'],
                 step="Fold the tentacle in a zig-zag Unfold the tentacle, then refold it inside out so the template markings are on the inside You can also leave the template markings on the outside if that's your style! Optional: add glue when you fold it in half to hold the two layers together (it's not necessary since it holds its shape pretty well without glue)")

    step4 = Step(step_count=4, step_title="Cut and Knot the Thread", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F5F/9SRG/KMDGGKPB/F5F9SRGKMDGGKPB.jpg?auto=webp&frame=1&crop=3:2&width=600&height=1024&fit=bounds&md=371f4a5d345156df079996117bd12bf1', 'https://content.instructables.com/ORIG/FFM/4HT9/KMDGGKQF/FFM4HT9KMDGGKQF.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=f42c4bf73d213abe1baf325a61cda794'],
                 step="Cut a piece of thread around 12\" long Double or triple knot the end of the thread Thread the needle")

    step5 = Step(step_count=5, step_title="Sew the Tentacle", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FJC/FBKU/KMDGGKPC/FJCFBKUKMDGGKPC.jpg?auto=webp&frame=1&width=797&height=1024&fit=bounds&md=b645bc629872118011a86c334a829dbe', 'https://content.instructables.com/ORIG/FE8/KF66/KMDGGKPP/FE8KF66KMDGGKPP.jpg?auto=webp&frame=1&crop=3:2&width=403&height=1024&fit=bounds&md=aaf3adc8dcd60803dd129f8877dbf21f', 'https://content.instructables.com/ORIG/F5Y/R4D9/KMDGGKPU/F5YR4D9KMDGGKPU.jpg?auto=webp&frame=1&width=403&height=1024&fit=bounds&md=8bbffe8f6bb38799250aa5097f2c9e71'],
                 step="Use the holes you made in step 2 to sew the thread through the tentacle Make sure to start from the rounded end of the tentacle, and on the outside of the zig-zag fold Add a drop of glue (or tape) on the knot to make sure it doesn't pull through the paper Double check that the knotted end is on the rounded side of the tentacle, and the extra thread is on the opposite side")

    step6 = Step(step_count=6, step_title="Make More Tentacles!", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FBW/O6GD/KMDGGKQS/FBWO6GDKMDGGKQS.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=6db3724801f0f3e3a022333eacddaa94'],
                 step="Repeat 7 more times until all 8 tentacles are finished Set the legs aside for now to let the glue dry Are you regretting making a robot with 8 legs? Just be glad it's not a centipede!")

    step7 = Step(step_count=7, step_title="Making the Body", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F0K/GJPB/KMDGGKS1/F0KGJPBKMDGGKS1.jpg?auto=webp&frame=1&crop=3:2&width=865&height=1024&fit=bounds&md=927151c4b8487c4c1d9d81dc8f771519', 'https://content.instructables.com/ORIG/FTU/KHVU/KMDGGKR7/FTUKHVUKMDGGKR7.jpg?auto=webp&frame=1&width=335&height=1024&fit=bounds&md=319d2535d455a255d948daacb8baa716', 'https://content.instructables.com/ORIG/FO0/B7HY/KMDGGKS2/FO0B7HYKMDGGKS2.jpg?auto=webp&frame=1&width=335&height=1024&fit=bounds&md=73218141b3ffc31342c20e9a6cbe009e'],
                 step="Cut out the template for the body and top Fold the body following the markings on the template")

    step8 = Step(step_count=8, step_title="Assemble the Top and Body", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F95/UO75/KMDGGKSF/F95UO75KMDGGKSF.jpg?auto=webp&frame=1&width=733&height=1024&fit=bounds&md=41622c29b45efcb488b158173b8525b7', 'https://content.instructables.com/ORIG/FC1/20TU/KMDGGKV3/FC120TUKMDGGKV3.jpg?auto=webp&frame=1&width=358&height=1024&fit=bounds&md=369783bc4fa19befc59fa292858f6e42', 'https://content.instructables.com/ORIG/FXR/AV5Y/KMDGGKW9/FXRAV5YKMDGGKW9.jpg?auto=webp&frame=1&width=358&height=1024&fit=bounds&md=8f621a36332926b65e7c5efef4e3855c'],
                 step="Glue the body into an octagon shape (the two sections on either end should overlap on top of each other to form 8 sides) Glue the top on to the tabs Tip: I found it easiest to flip the body upside down while I was gluing the tabs in place")

    step9 = Step(step_count=9, step_title="Alternative Body", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F33/XYNI/KMDGGL00/F33XYNIKMDGGL00.jpg?auto=webp&frame=1&width=1017&height=1024&fit=bounds&md=1f24043130b4b852a599c1a9086dda6f'],
                 step="If you're feeling up to a challenge, you can also make the body using the origami method, which results in the twisty-top on this Octobot I used the instructions here to create an Origami Octagonal Box: Origami Octagonal Box")

    step10 = Step(step_count=10, step_title="Cut the Base", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FLF/0EA1/KMDGGL03/FLF0EA1KMDGGL03.jpg?auto=webp&frame=1&width=805&height=1024&fit=bounds&md=009a56e6bddbdc4ae129212415ba3793', 'https://content.instructables.com/ORIG/FH7/C31Q/KMDGGL0G/FH7C31QKMDGGL0G.jpg?auto=webp&frame=1&width=395&height=1024&fit=bounds&md=fdf7e879475e520bde659ab8bb04990a', 'https://content.instructables.com/ORIG/FMO/CY5O/KMDGGL0H/FMOCY5OKMDGGL0H.jpg?auto=webp&frame=1&width=395&height=1024&fit=bounds&md=e75c71c86f66710ff071a71ed7c273e8'],
                  step="Use the base stencil octagon to trace an octagon onto a piece of cardboard Cut the base octagon out of cardboard The base should be just small enough to fit inside the body (but not so small that there's loads of empty space around it)")

    step11 = Step(step_count=11, step_title="Attach the Tentacles", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F9P/XDVS/KMDGGKWP/F9PXDVSKMDGGKWP.jpg?auto=webp&frame=1&width=595&height=1024&fit=bounds&md=a1adf9b6c3c5c8e0e703af4961501b90', 'https://content.instructables.com/ORIG/F4S/7HYY/KMDGGKWA/F4S7HYYKMDGGKWA.jpg?auto=webp&frame=1&crop=3:2&width=605&height=1024&fit=bounds&md=10a4ab70b06cc16a95b86e3be8d31c0b'],
                  step="Glue a tentacle to the bottom of the cardboard base Only glue the last folded section of the tentacle (the one without a hole) Make sure the thread doesn't accidentally get glued to the cardboard")

    step12 = Step(step_count=12, step_title="Add the Other Tentacles", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FL0/B9J9/KMDGGKX4/FL0B9J9KMDGGKX4.jpg?auto=webp&frame=1&width=800&height=1024&fit=bounds&md=275a7029490a2bbf10a64f7b57d3f542', 'https://content.instructables.com/ORIG/FVI/SE0V/KMDGGKX9/FVISE0VKMDGGKX9.jpg?auto=webp&frame=1&width=400&height=1024&fit=bounds&md=09b82c3d065cf3a79da31cdba63c71dc', 'https://content.instructables.com/ORIG/FJL/UGGX/KMDGGKXM/FJLUGGXKMDGGKXM.jpg?auto=webp&frame=1&crop=3:2&width=400&height=1024&fit=bounds&md=ec2acdd3f20e1ac1187837069f7f205f'],
                  step="Repeat for the other 7 tentacles Try to keep the threads from getting tangled")

    step13 = Step(step_count=13, step_title="Make the Servo Holder", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F1G/FF67/KMDGGKXO/F1GFF67KMDGGKXO.jpg?auto=webp&frame=1&crop=3:2&width=600&height=1024&fit=bounds&md=123cdf42633388498dbe1072b3696587', 'https://content.instructables.com/ORIG/FXO/F4SN/KMDGGKY1/FXOF4SNKMDGGKY1.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=35907cb1161a66855eec59d99bddd818'],
                  step="Cut the servo holder template Fold the servo holder Glue it around the servo You don't need to glue the paper to the servo—just wrap the servo holder around the servo, and glue it where the two parts overlap")

    step14 = Step(step_count=14, step_title="Attach the Servo", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FQP/K3AK/KMDGGKY2/FQPK3AKKMDGGKY2.jpg?auto=webp&frame=1&width=588&height=1024&fit=bounds&md=4e2c336714556b3a1a02fa5d07ef39e5', 'https://content.instructables.com/ORIG/FZ7/7NGX/KMDGGKYF/FZ77NGXKMDGGKYF.jpg?auto=webp&frame=1&width=612&height=1024&fit=bounds&md=bbd6db4f434bc99631fdb9d275fffb1c'],
                  step="Glue the servo holder to the cardboard base of the Octobot Note that the servo itself isn't centered on the body—the servo's shaft is what should be approximately centered")

    step15 = Step(step_count=15, step_title="Making the Axle", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FCY/XBD1/KMDGGKYT/FCYXBD1KMDGGKYT.jpg?auto=webp&frame=1&crop=3:2&width=849&height=1024&fit=bounds&md=aa0dbe61639928aa17e24a9d04958e34', 'https://content.instructables.com/ORIG/FFV/1UKC/KMDGGKYX/FFV1UKCKMDGGKYX.jpg?auto=webp&frame=1&width=351&height=1024&fit=bounds&md=6b3149a6023582f1ee2ebaa300e4402e', 'https://content.instructables.com/ORIG/F12/C1FM/KMDGGKYY/F12C1FMKMDGGKYY.jpg?auto=webp&frame=1&width=351&height=1024&fit=bounds&md=076188d554cc09a23bac539927c2a7d8'],
                  step="Cut a piece of straw about 3/4\" long Use the needle to poke a hole through the straw at about halfway between the top and bottom Poke another hole(this one only needs to go through one wall) close to the top of the piece of straw")

    step16 = Step(step_count=16, step_title="Check the Straw Size", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FBP/UG66/KMDGGKYV/FBPUG66KMDGGKYV.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=00f9db2034907d177c64d8683b284baf', 'https://content.instructables.com/ORIG/FVL/UH9E/KMDGGKZ8/FVLUH9EKMDGGKZ8.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=648d61bd3618a19553e1f895eb1ee045'],
                  step="Put the straw onto the servo shaft Since straws come in all different sizes, it may be too big. If that's the case, put a very small piece of tape around the servo shaft to increase its diameter The straw should fit snugly on the shaft")

    step17 = Step(step_count=17, step_title="Attach the Thread", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FGF/T2V9/KMDGGKYZ/FGFT2V9KMDGGKYZ.jpg?auto=webp&frame=1&width=791&height=1024&fit=bounds&md=95d77aaf2ab434ac78fd4c42894dfcde', 'https://content.instructables.com/ORIG/FPI/EHFE/KMDGGKZ0/FPIEHFEKMDGGKZ0.jpg?auto=webp&frame=1&width=409&height=1024&fit=bounds&md=979679061aaf625df0c904c1efef290b', 'https://content.instructables.com/ORIG/FXG/XM31/KMDGGKZ1/FXGXM31KMDGGKZ1.jpg?auto=webp&frame=1&width=409&height=1024&fit=bounds&md=70e166da2ac836b5b4a26013768de1cb'],
                  step="Sew one of the pieces of thread onto the straw First go through the middle holes, then up out the top")

    step18 = Step(step_count=18, step_title="Do It Again", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FRC/J3LK/KMDGGKZ2/FRCJ3LKKMDGGKZ2.jpg?auto=webp&frame=1&width=610&height=1024&fit=bounds&md=521096c462b301532f3a61290bc750ad', 'https://content.instructables.com/ORIG/FNM/ENEZ/KMDGGKZ3/FNMENEZKMDGGKZ3.jpg?auto=webp&frame=1&width=590&height=1024&fit=bounds&md=f7e69838235b37af9ffe481f035627e5'],
                  step="Repeat this 7 more times until all 8 pieces of thread are sewn into the straw It's best to do this one piece of thread at a time to avoid them getting tangled or twisted Check that the length of the thread between the straw and the tentacles is roughly the same You can check this by pulling the piece of straw up to check that the threads are all roughly the same tensions")

    step19 = Step(step_count=19, step_title="Attach the Axle", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FEX/FNS5/KMDGGKZ4/FEXFNS5KMDGGKZ4.jpg?auto=webp&frame=1&width=800&height=1024&fit=bounds&md=83c1b4c5f8c5a68cb0eb1d9a02b3edee', 'https://content.instructables.com/ORIG/F6L/BBIA/KMDGGKZ5/F6LBBIAKMDGGKZ5.jpg?auto=webp&frame=1&width=400&height=1024&fit=bounds&md=a0d7e219ef9bc1565571bc0c93d775e5', 'https://content.instructables.com/ORIG/F2T/TI5W/KMDGGKZ7/F2TTI5WKMDGGKZ7.jpg?auto=webp&frame=1&width=400&height=1024&fit=bounds&md=0af8aa00b8f1c860397a57d48fbfd594'],
                  step="Push the straw to the servo shaft, making sure it's snug (if it's loose, the shaft will just spin inside the straw without turning the straw itself) Make sure the tentacle are all fully extended, then tie a big knot where the threads exit from the straw Trim the extra thread")

    step20 = Step(step_count=20, step_title="Connect the Circuit", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F5W/XAR8/KMDGGKZL/F5WXAR8KMDGGKZL.jpg?auto=webp&frame=1&crop=3:2&width=639&height=1024&fit=bounds&md=0d053f4b0e33b9c8b79d9fd8e30916bc', 'https://content.instructables.com/ORIG/FO3/64LM/KMDGGQ1E/FO364LMKMDGGQ1E.jpg?auto=webp&frame=1&width=561&height=1024&fit=bounds&md=e939a6bdc08d2677471106edc2ade860'],
                  step="Connect the servo to the Bit Board at Servo Pin 1")

    step21 = Step(step_count=21, step_title="Upload the Code", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FA1/5LTQ/KMDGGQEH/FA15LTQKMDGGQEH.png?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=46498ac0236e752cbeba582cc56c8da4'],
                  step="Upload the code from here: Octobot Code You'll note that the sound activation requires touching the logo at the same time. That's to avoid accidentally triggering it if you're in a noisy environment. You can change that by getting rid of the \"logo is pressed\" block The sound trigger requires using the micro: bit v2. If you don't have the v2, there's loads of other ways you can trigger the Octobot, such as using the accelerometer to shake the micro: bit, or making it light-sensitive")

    step22 = Step(step_count=22, step_title="Test It", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FPL/4Z5M/KMDGGKZM/FPL4Z5MKMDGGKZM.jpg?auto=webp&frame=1&width=601&height=1024&fit=bounds&md=cf45c0af5ce77d97d57ff9fe87329616'],
                  step="It's easiest to test the mechanism while the servo is still exposed Use the A and B buttons to try retracting and extending the tentacles Tip: For the TentacleAction function, try playing around with the timing and speed to get different effects Depending on how loose the threads are, you may need to pre-wind the threads around the axle by using the A button before triggering the TentacleAction function")

    step23 = Step(step_count=23, step_title="Put the Body On", project_id=1, step_imgs=['https://content.instructables.com/ORIG/FPL/4Z5M/KMDGGKZM/FPL4Z5MKMDGGKZM.jpg?auto=webp&frame=1&width=601&height=1024&fit=bounds&md=cf45c0af5ce77d97d57ff9fe87329616', 'https://content.instructables.com/ORIG/FM1/XAT1/KMDGGL01/FM1XAT1KMDGGL01.jpg?auto=webp&frame=1&width=599&height=1024&fit=bounds&md=772e860a44de52b0e6522a2a10513010'],
                  step="Put the body on The thread should slide into the thin cutouts in the body The servo wire should go through the larger cutout Optional: You can add a bit of glue to secure the body to the cardboard base(I didn't in case I wanted to access the inside)")

    step24 = Step(step_count=24, step_title="Give It a Face", project_id=1, step_imgs=['https://content.instructables.com/ORIG/F0V/KKJ8/KMDGGO7H/F0VKKJ8KMDGGO7H.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=74858cf8f0fd7bc76ac21948d6146590'],
                  step="Give your Octobot a face! Touch the logo and shout \"BOO!\" to make Octobot retract its tentacles!")

    db.session.add(step1)
    db.session.add(step2)
    db.session.add(step3)
    db.session.add(step4)
    db.session.add(step5)
    db.session.add(step6)
    db.session.add(step7)
    db.session.add(step8)
    db.session.add(step9)
    db.session.add(step10)
    db.session.add(step11)
    db.session.add(step12)
    db.session.add(step13)
    db.session.add(step14)
    db.session.add(step15)
    db.session.add(step16)
    db.session.add(step17)
    db.session.add(step18)
    db.session.add(step19)
    db.session.add(step20)
    db.session.add(step21)
    db.session.add(step22)
    db.session.add(step23)
    db.session.add(step24)

    db.session.commit()


def undo_steps():
    db.session.execute('TRUNCATE steps CASCADE')
    db.session.commit()
