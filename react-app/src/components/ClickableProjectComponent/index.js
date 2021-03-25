import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from "../../store/project"
import { getUsers } from '../../store/user'
import { getCategory } from '../../store/category'
import './ClickableProject.css'
import RandomFeatured from '../FeaturedIcon'

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
          {users.map((user) => (
            <div key={user.id}>
              {categories.map((category) => {
                if (user.id === project.user_id && project.category_id === category.id) {
                  return (
                    <>
                    <div key={category.id} className='clickableP'>
                      <Link to={`/project/${project.id}`}>
                        <img className='project-img' src={project?.intro_imgs[0]} />
                      </Link>
                        <div className='project-info'>
                          <NavLink className='title' to={`/project/${project.id}`}>{project?.title}</NavLink> by
                          <NavLink className='user-link' to={`/users/${user.id}`} >{user?.username}</NavLink> in
                          <NavLink className='category-link' to={`/category/${category.id}`}>{category?.name}</NavLink>
                        </div>
                        <div className='favorites'>
                          <span className='justforflex'>
                          <RandomFeatured />
                          </span>
                          <span className='favorite'>
                            <i class="fas fa-heart" />
                          </span>
                        </div>
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
