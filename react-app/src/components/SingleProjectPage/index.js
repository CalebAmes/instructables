import React, { useEffect, useState } from 'react'
import { getProjects } from "../../store/project"
import { getCurrentSteps } from "../../store/step"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Steps from '../Steps'
import Comments from '../Comments'
import Intro from '../ProjectIntro'
import './SingleProjectPage.css'
import Footer from '../Footer'

function Project() {
  const dispatch = useDispatch()

  const projects = useSelector((state) => state.project.projects)

  // const projects = Object.values(projectItems)

  let { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  let project = null;
  if(projects) {
    for (let i = 0; i < projects.length; i++) {
      let el = projects[i];
      if (Object.keys(el)[0] === id) {
        project = Object.values(el)[0]
      }
    }
  }

  useEffect(async () => {
    await dispatch(getProjects())
    await dispatch(getCurrentSteps(id))
    setLoaded(true)
  }, [dispatch])


  if(project) {
    return (
      <div>
        {loaded && (
          <Intro project={project} />
        )}
        {loaded && (
          <Steps />
        )}
        {loaded && (
          <Comments />
        )}
      </div>
    )
  } else {
    return <h1>loading...</h1>
  }

}

export default Project
