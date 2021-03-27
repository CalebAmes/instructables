import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/project"
import ClickProject from "../ClickableProjectComponent";
import { getComment } from '../../store/comment'
import { getCategory } from '../../store/category'
import { useParams } from "react-router";
import { getUsers } from '../../store/user'
// import NavBar from '../NavBar'
// import AddFavorite from "../FavoriteIcon";

function Projects() {
  const dispatch = useDispatch();

  const projectItems = useSelector((state) => state.project)
  const categoryItems = useSelector((state) => state.category)
  // const commentItems = useSelector((state) => state.comment)
  const userItems = useSelector((state) => state.user)
  const projects = Object.values(projectItems)
  console.log(userItems)


  useEffect (() => {
    dispatch(getProjects());
    dispatch(getCategory());
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
    <h1>All projects page</h1>
    {projects.map(project => (
        <div key={project.id}>
          <ClickProject project={project} user={userItems[project.user_id]} category={categoryItems[project.category_id]}/>
        </div>
    ))}
  </>
 )}
  
export default Projects
