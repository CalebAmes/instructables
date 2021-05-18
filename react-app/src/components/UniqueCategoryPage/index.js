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
  const [ loaded, setLoaded ] = useState(false)

  const categoryItems = useSelector((state) => state.category)
  const projectItems = useSelector((state) => state.project.projects)
  const userItems = useSelector((state) => state.user)

  let { id } = useParams()
  let projects = []

  if(projectItems) {
    for (let i = 0; i <projectItems.length; i++) {
      let el = projectItems[i]
      el = Object.values(el)
      projects.push(el[0])
    }
  }
  // const projects = Object.values(projectItems)
  const category = categoryItems[id]

  useEffect(async () => {
    await dispatch(getCategory())
    await dispatch(getProjects(id))
    setLoaded(true)
  }, [dispatch])

 
    return (
      <>
          {loaded  &&
              <Carousel className='carousel' images={category.imgs}/>
            }
          <div className='grid'>
            <span className='break2'>
              <hr/>
            </span>
            <div className='title-cont'>
            <div className='cat-img'>{loaded && <img className='cat-img' src={category.imgs[0]} />}
            <div className='cat-title'>{loaded && <h1>{category.titles[0]}</h1>}</div>
            </div>
            <div className='cat-img'>{loaded && <img className='cat-img' src={category.imgs[1]} />}
            <div className='cat-title'>{loaded && <h1>{category.titles[1]}</h1>}</div>
            </div>
            <div className='cat-img'>{loaded && <img className='cat-img' src={category.imgs[2]} />}
            <div className='cat-title'>{loaded && <h1>{category.titles[2]}</h1>}</div>
            </div>
            </div>
            <div className='description1'>{loaded && 
            <span className='description'>{category.description}.</span> }</div>
            <span className='break1'>
              <hr/>
            </span>
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
          </div>
          <Footer/>
      </>
  )
}


export default Category