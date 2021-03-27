// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProjects } from "../../store/project"


// function RandomFeatured() {
//   const dispatch = useDispatch()

//   const projectItems = useSelector((state) => state.project)

//   const projects = Object.values(projectItems)

//   useEffect(async () => {
//     await dispatch(getProjects())
//   }, [dispatch])

//   let count = 0

//   let randomNum = Math.floor(Math.random() * 10)
//   return (
//     <>
//       {projects.map((project) => {
//         if (project.id === randomNum) {
//           return (
//             <>
//               <span className='featured'>
//                 <i class="fas fa-star"></i>
//               </span>
//             </>
//           )
//         }
//       })}
//     </>
//   )
// }

// export default RandomFeatured
