import React, { useEffect, useState } from 'react'
import Project from '../SingleProjectPage'
import { NavLink, Link } from 'react-router-dom'
import { getProjects } from "../../store/project"
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/user'
import { getCategory } from '../../store/category'
import './ClickableProject.css'

function ClickProject() {
  const dispatch = useDispatch()

  const projectItems = useSelector((state) => state.project)
  const userItems = useSelector((state) => state.user)
  const categoryItems = useSelector((state) => state.category)
 

  const categories = Object.values(categoryItems)
  const projects = Object.values(projectItems)
  const users = Object.values(userItems)


  useEffect(() => {
    dispatch(getProjects())
    dispatch(getUsers())
    dispatch(getCategory());
  }, [dispatch])
  
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          {users.map((user)=> (
            <div key={user.id}>
              {categories.map((category) => {
                if(user.id === project.user_id && project.category_id === category.id){
                  return (
                    <>
                      <div className='clickableP'>
                      <NavLink to='/project/:id'>
                      <img src={project?.intro_img} />
                      <div className='links'>{project?.title} by 
                      <NavLink className='userlink'to='users/:userId' >{user?.username}</NavLink> in 
                      <NavLink className='catagorylink' to='/category/:categoryId'>{category?.name}</NavLink>
                      </div>
                      </NavLink>
                      </div>
                    </>
                  )   
                }
              })}
              </div>
          ))}
        </div>
      ))}
    </>
  )
}


export default ClickProject