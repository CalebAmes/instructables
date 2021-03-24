import React, { useEffect, useState } from 'react'
import { getProjects } from "../../store/project"
import { getCurrentSteps } from "../../store/step"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Steps from '../Steps'

function Project() {
  const dispatch = useDispatch()

  const projectItems = useSelector((state) => state.project)
  const stepsItems = useSelector((state) => state.steps)

  const projects = Object.values(projectItems)
  const steps = Object.values(stepsItems)

  let { id } = useParams()

  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    await dispatch(getProjects())
    await dispatch(getCurrentSteps(id))
    setLoaded(true)
  }, [dispatch])

  return (
    <div>
      {id}{projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
      {loaded && (
        <Steps />
      )}

      {steps.map((step) => (
        <div>
          {step.step}
        </div>
      ))}

    </div>
  )

}

export default Project
