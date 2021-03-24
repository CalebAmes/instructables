import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OneImage, TwoImages, ThreeImages } from '../StepImages'
import './steps.css'

function Steps() {

  const stepsItems = useSelector((state) => state.steps)
  const steps = Object.values(stepsItems)

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
          <div className="step-toolbox">
            <div className="add-tip-btn tooltip">
              <i class="fa fa-lightbulb-o" aria-hidden="true"><a className="tooltip-text">  Add Tip</a></i>
            </div>
            <div className="ask-a-question-btn tooltip">
              <i class="fa fa-question-circle" aria-hidden="true"><a className="tooltip-text">  Ask question</a></i>
            </div>
            <div className="comment-btn tooltip">
              <i class="fa fa-comments" aria-hidden="true"><a className="tooltip-text">  Comment</a></i>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default Steps;
