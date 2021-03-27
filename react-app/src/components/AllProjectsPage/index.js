import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/project"
import ClickProject from "../ClickableProjectComponent";
import { getComment } from '../../store/comment'
import { getCategory } from '../../store/category'
import { getUsers } from '../../store/user'
import NavBar from '../NavBar'
import AddFavorite from "../FavoriteIcon";

function Projects() {
  const dispatch = useDispatch();

  // const projectItems = useSelector((state) => state.project)
  // const categoryItems = useSelector((state) => state.category)
  // const commentItems = useSelector((state) => state.comment)
  // const userItems = useSelector((state) => state.user)

  // const projectArray = Object.values(projectItems)
  // const categoryArray = Object.values(categoryItems)
  // const commentArray = Object.values(commentItems)
  // const usersArray = Object.values(userItems)


  // useEffect(() => {
  //   dispatch(getProjects());
  //   dispatch(getCategory());
  //   // dispatch(getComment());
  //   dispatch(getUsers())
  // }, [dispatch])


  return (
    <>
      <h1>All projects page</h1>
      projectsArray.map(
        component => 
        project.title
        project.img

        categoryObject[project.categoryId].category = outdoors
        userObject[project.userId].name = demoa

      )
      {/* <ClickProject /> */}
    </>
  )
}

export default Projects
