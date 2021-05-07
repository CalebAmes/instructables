import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OneImage, TwoImages, ThreeImages } from '../StepImages'
import { StepBreak } from '../Break'
import './steps.css'
import { openForm } from '../../store/commentPostState'

function Steps({myRef}) {
  const dispatch = useDispatch()

  const stepsItems = useSelector((state) => state.steps)
  const steps = Object.values(stepsItems)

  const handleClick = async () => {
    await dispatch(openForm());
    // window.scrollTo(0,document.body.scrollHeight);
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
  }

  return (
    <div className="steps">
      {steps.map((step) => (
        <div className="step">
          <div className="step-title">
            Step {step.step_count}: {step.step_title}
          </div>
          <div className="step-imgs">
            {step.step_imgs.length == 1 && (
              <OneImage images={step.step_imgs} />
            )}
            {step.step_imgs.length == 2 && (
              <TwoImages images={step.step_imgs} />
            )}
            {step.step_imgs.length == 3 && (
              <ThreeImages images={step.step_imgs} />
            )}
          </div>
          <div className="step-text">
            {step.step}
          </div>
          <div onClick={handleClick} className="step-toolbox">
            <div className="add-tip-btn tooltip">
              <i class="fa fa-lightbulb-o" aria-hidden="true"><a className="tooltip-text">  Add Tip</a></i>
            </div>
            <div onClick={handleClick} className="ask-a-question-btn tooltip">
              <i class="fa fa-question-circle" aria-hidden="true"><a className="tooltip-text">  Ask question</a></i>
            </div>
            <div  onClick={handleClick} className="comment-btn tooltip">
              <i class="fa fa-comments" aria-hidden="true"><a className="tooltip-text">  Comment</a></i>
            </div>
          </div>
          <StepBreak />
        </div>
      ))
      }
    </div >
  )
}

export default Steps;
