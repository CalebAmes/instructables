import React, { useEffect, useState } from 'react'
import Project from '../SingleProjectPage'
import { NavLink } from 'react-router-dom'


function ClickProject() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/projects')
      const data = await res.json()
      setProjects(data.projects)
    }
    fetchData()
  }, [])

  return (
    <>
      {projects.map((project) => (
        <div className='clickableP' key={project.id}>
          <NavLink to='/project/:id'>
          <img src={project.intro_img} />
          <div>Title: {project.title}</div>
          <div>Intro: {project.intro}</div>
          </NavLink>
        </div>
      ))}
    </>
  )
}


export default ClickProject