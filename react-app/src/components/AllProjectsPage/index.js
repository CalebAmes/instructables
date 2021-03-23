import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/project"

function Projects() {
  const dispatch = useDispatch();
  
  const projectItems = useSelector((state) => state.project)

  const projectArray = Object.values(projectItems)


  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch])
  return <div>
    <h1>All projects page</h1>
    {projectArray.map((project) => (
      <div>
        <div>Title: {project.title}</div>
        <div>Intro: {project.intro}</div>
        <img src={project.intro_img} />
      </div>
    ))}
    {/* <div>projects</div> */}
  </div>
}

export default Projects
