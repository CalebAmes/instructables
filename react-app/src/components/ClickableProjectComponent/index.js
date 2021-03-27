import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './ClickableProject.css'
// import RandomFeatured from '../FeaturedIcon'

function ClickProject({ project, category, user }) {

  return (
    <>
      <div key={category} className='clickableP'>
          <Link to={`/project/${project.id}`}>
            <img className='project-img' src={project?.intro_imgs[0]} />
          </Link>
            <div className='project-info'>
              <NavLink className='title' to={`/project/${project.id}`}>{project?.title}</NavLink> by
              <NavLink className='user-link' to={`/users/${user?.id}`} >{user?.username}</NavLink> in
              <NavLink className='category-link' to={`/category/${category?.id}`}>{category?.name}</NavLink>
            </div>
            <div className='favorites'>
              <span className='justforflex'>
              {/* <RandomFeatured project={project}/> */}
              </span>
              <span className='favorite'>
                <i class="fas fa-heart" />
              </span>
            </div>
      
        </div>
    </>
  )
}


export default ClickProject
