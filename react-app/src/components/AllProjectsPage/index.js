import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../../store/project"
import ClickProject from "../ClickableProjectComponent";

function Projects() {
  // const dispatch = useDispatch();
  // const projectsObject = dispatch(getProjects())
  // const projects = projectsObject["projects"]
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/projects")
  //     const data = await response.json();
  //     setProjects(data.projects)
  //   }
  //   fetchData();
  // }, [])
  return <div>
    <h1>All projects page</h1>
      <div>
        <ClickProject/>
      </div>
    {/* <div>projects</div> */}
  </div>
}

export default Projects
