// import React, {useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router';
// import { getCategory } from '../../store/category';
// import ClickableProject from '../ClickableProjectComponent'
// import { getProjects } from '../../store/project'
// import Carousel from '../ProjectCarousel';
// import Projects from '../AllProjectsPage';
// import ClickProject from '../ClickableProjectComponent';

// function Category(){
//   const dispatch = useDispatch();

//   const categoryItems = useSelector((state) => state.category)
//   const projectItems = useSelector((state) => state.project)
  
//   const categories =Object.values(categoryItems)
//   const projects = Object.values(projectItems)

//   let { id } = useParams()

//   useEffect(async () => {
//     await dispatch(getCategory())
//     await dispatch(getProjects(id))
//   }, [dispatch])

//   return (
//     <>
//     </>
//   )
// }


// export default Category