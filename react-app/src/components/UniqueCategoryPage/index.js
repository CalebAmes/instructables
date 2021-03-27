import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { getCategory } from '../../store/category';
import { getProjects } from '../../store/project'
// import ProjectCarousel from '../ProjectCarousel';
import ClickProject from '../ClickableProjectComponent';
import './UniqueCategoryPage.css'



function Category(){
  const dispatch = useDispatch();

  const categoryItems = useSelector((state) => state.category)
  const projectItems = useSelector((state) => state.project)
  const userItems = useSelector((state) => state.user)

  const projects = Object.values(projectItems)

  let { id } = useParams()

  useEffect(async () => {
    await dispatch(getCategory())
    await dispatch(getProjects(id))
  
  }, [dispatch])
 
    return (
      <>
        <div className='grid'>
        <div className='carousel'>here is where the carousel will go</div>
        <div className='categories'>
          <div className='inner-categories'>
          {projects.map((project) => (
            (project?.category_id == id ? (
              <ClickProject key={project.id} project={project} user={userItems[project.user_id]} category={categoryItems[project.category_id]}/>
              ): null) 
              ))}
            </div>
        </div>
              </div>
      </>
  )
}


export default Category