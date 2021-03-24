import React, {useEffect} from 'react'
import { getProjects } from "../../store/project"
import { useDispatch, useSelector } from 'react-redux'

function Project () {
  const dispatch = useDispatch()

  const projectItems = useSelector((state) => state.project)
  
  const projects = Object.values(projectItems)


  useEffect(() => {
    dispatch(getProjects())

  }, [dispatch])

  return (
    <>
    {projects.map((project) => (
      <div key={project.id}>{project.title}</div>
    ))}
    </>
  )

}

export default Project