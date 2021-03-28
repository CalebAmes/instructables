import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/project"
import ClickProject from "../ClickableProjectComponent";
import { getComment } from '../../store/comment'
import { getCategory } from '../../store/category'
import { useParams } from "react-router";
import { Carousel } from '../SplashPage'
import { getUsers } from '../../store/user'
import Footer from "../Footer";
import './AllProjectsPage.css'
// import NavBar from '../NavBar'
// import AddFavorite from "../FavoriteIcon";

function Projects() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false)

  const projectItems = useSelector((state) => state.project)
  const categoryItems = useSelector((state) => state.category)
  const userItems = useSelector((state) => state.user)

  let { id } = useParams()

  const projects = Object.values(projectItems)
  const category = Object.values(categoryItems)
  console.log(category)


  useEffect (() => {
    dispatch(getCategory());
    dispatch(getProjects(id));
    dispatch(getUsers())
    setLoaded(true)
  }, [dispatch])

  return (
    <>
    {/* {loaded  &&
        <Carousel className='carousel' images={category.imgs}/>
    } */}
    <div className='projects'>
      <div>
        <h1>All projects</h1>
        {projects.map(project => (
          <div key={project.id}>
              <ClickProject project={project} user={userItems[project.user_id]} category={categoryItems[project.category_id]}/>
            </div>
        ))}
      </div>
    </div>
      <Footer/>
  </>
 )}
  
export default Projects
