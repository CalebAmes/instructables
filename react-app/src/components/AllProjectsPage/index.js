import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/project"
import { getComment } from '../../store/comment'
import { getCategory } from '../../store/category'

function Projects() {
  const dispatch = useDispatch();
  
  const projectItems = useSelector((state) => state.project)
  const categoryItems = useSelector((state) => state.category)
  const commentItems = useSelector((state) => state.comment)

  const projectArray = Object.values(projectItems)
  const categoryArray = Object.values(categoryItems)
  const commentArray = Object.values(commentItems)


  useEffect(() => {
    dispatch(getProjects());
    dispatch(getCategory());
    dispatch(getComment());
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
    <h2>All Categories</h2>
    {categoryArray.map((category) => (
      <div>
        <div>name: {category.name}</div>
      </div>
    ))}
    <h2>All Comments</h2>
    {commentArray.map((comment) => (
      <div>
        <div>comment: {comment.comment}</div>
        <div>upvotes: {comment.upvotes}</div>
      </div>
    ))}
  </div>
}

export default Projects
