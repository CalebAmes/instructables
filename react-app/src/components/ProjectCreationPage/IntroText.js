import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {createProject} from '../../store/project'
import Video from '../Video'

const IntroText = ({project, setProject, table, setTable}) => {
   const[intro, setIntro] = useState('')
   const dispatch = useDispatch()

   const handleSubmit = (e) => {
      e.preventDefault()
      setProject({...project, 'intro': intro})
      setTable('steps')
      dispatch(createProject(project))
      return project
   }

   const updateIntro = (e) => {
      setIntro(e.target.value)
   }

   return (
      <div>
         <h1>{project.title}</h1>
         <img src={project.intro_imgs} alt={project.title}/>
         <form onSubmit={handleSubmit}>
            <div>
               <textarea
               name='intro' 
               value={intro}
               onChange={updateIntro} 
               />
            </div>
            <div>
               <button type='submit'>Add Intro</button>
            </div>
         </form>
      </div>
   )
}

export default IntroText