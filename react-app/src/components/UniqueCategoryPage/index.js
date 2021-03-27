import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { getCategory } from '../../store/category';
import { getProjects } from '../../store/project'
import { Carousel } from '../SplashPage' 
import ClickProject from '../ClickableProjectComponent';
import './UniqueCategoryPage.css'
import Footer from '../Footer';



function Category(){
  const dispatch = useDispatch();

  const categoryItems = useSelector((state) => state.category)
  const projectItems = useSelector((state) => state.project)
  const userItems = useSelector((state) => state.user)
  const [ loaded, setLoaded ] = useState(false)

  let { id } = useParams()
  

  const projects = Object.values(projectItems)
  const category = categoryItems[id]
  console.log(category)

  useEffect(async () => {
    await dispatch(getCategory())
    await dispatch(getProjects(id))
    setLoaded(true)
  }, [dispatch])

 
    return (
      <>
        <div className='grid'>
          <div className= 'carousel'>
            {loaded  &&
              <Carousel className='carousel' images={category.imgs}/>
            }
          </div>
          <div className='categories'>
            <div className='inner-categories'>
              {projects.map((project) => (
                (project?.category_id == id ? (
                  <ClickProject key={project.id} project={project} user={userItems[project.user_id]} category={categoryItems[project.category_id]}/>
                  ): null) 
                  ))}
              </div>
          <div className='contests'></div>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </>
  )
}


export default Category