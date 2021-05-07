import React, { useEffect, useState, useRef } from 'react'
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
  const myRef = useRef(null);


  const projectItems = useSelector((state) => state.project)

  const projects = Object.values(projectItems)

  let { id } = useParams()

  const [loaded, setLoaded] = useState(false)
  const project = projects[id - 1]
  useEffect(async () => {
    await dispatch(getProjects())
    await dispatch(getCurrentSteps(id))
    setLoaded(true)
  }, [dispatch])



  return (
    <div>
      {loaded && (
        <Intro project={project} />
      )}
      {loaded && (
        <Steps myRef={myRef}/>
      )}
      {loaded && (
        <Comments myRef={myRef}/>
      )}
    </div>
  )

}

export default Project
