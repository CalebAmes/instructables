import React, { useEffect, useState } from 'react'
import { getProjects } from "../../store/project"
import { getCurrentSteps } from "../../store/step"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Steps from '../Steps'

import './SingleProjectPage.css'

function Project() {
  const dispatch = useDispatch()

  const projectItems = useSelector((state) => state.project)

  const projects = Object.values(projectItems)

  let { id } = useParams()

  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    await dispatch(getProjects())
    await dispatch(getCurrentSteps(id))
    setLoaded(true)
  }, [dispatch])

  return (
    <div>
      {loaded && (
        <h1>Intro</h1>
      )}
      {loaded && (
        <Steps />
      )}
    </div>
  )

}

export default Project
