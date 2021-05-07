import React from 'react'
import { OneImage, TwoImages, ThreeImages } from '../StepImages'
import { StepBreak } from '../Break'

export default function Intro({ project }) {
  return (
    <div className="steps">
      <div className="project-title">
        {project.title}
      </div>
      <div className="space"></div>
      <StepBreak />
      <div className="space"></div>
      <div className="step-imgs">
        {project.intro_imgs.length == 1 && (
          <OneImage images={project.intro_imgs} />
        )}
        {project.intro_imgs.length == 2 && (
          <TwoImages images={project.intro_imgs} />
        )}
        {project.intro_imgs.length == 3 && (
          <ThreeImages images={project.intro_imgs} />
        )}
      </div>
      <div className="step-text">
        {project.intro}
      </div>
    </div>
  )
}
