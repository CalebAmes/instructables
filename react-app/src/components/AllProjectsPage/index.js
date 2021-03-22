import React from 'react';
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../store/projects"

function Projects() {
  const dispatch = useDispatch();
  const projects = dispatch(getAllProjects())
  return <div>
    <h1>All projects page</h1>
    {projects.map((project) => (
      <div>Title: {project.title}</div>
    ))}
  </div>
}

export default Projects
