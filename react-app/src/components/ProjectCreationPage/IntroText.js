import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {createProject} from '../../store/project'
import Video from '../Video'
import c from './ProjectCreation.module.css'

const IntroText = ({project, setProject, table, setTable}) => {
   const [intro, setIntro] = useState('')
   const [categoryId, setCategoryId] = useState(0)
   const [keywords, setKeywords] = useState([])
   const dispatch = useDispatch()

   const handleSubmit = async (e) => {
      e.preventDefault()
      const newProject = {...project, 'category_id': categoryId, 'keywords': keywords, 'intro': intro};
      setProject(newProject)
      // setProject({...project, 'category_id': categoryId, 'keywords': keywords, 'intro': intro})
      console.log(newProject)
      const res = await dispatch(createProject(newProject))
      await console.log(res)
      await setTable('steps')
   }

   // const updateIntro = (e) => {
   //    setIntro(e.target.value)
   // }

   return (
      <div>
         <h1>{project.title}</h1>
         <img src={project.intro_imgs} alt={project.title}/>
         <form onSubmit={handleSubmit}>
            <div>
               <textarea
               name='intro' 
               value={intro}
               onChange={(e) => setIntro(e.target.value)}
               placeholder = 'add an intro'
               />
            </div>
            <div>
               <select 
               value={categoryId}
               onChange={(e) => setCategoryId(e.target.value)}>
                  <option value='0'>Choose a Category</option>
                  <option value='1'>Circuits</option>
                  <option value='2'>Workshop</option>
                  <option value='3'>Craft</option>
                  <option value='4'>Cooking</option>
                  <option value='5'>Living</option>
                  <option value='6'>Outside</option>
               </select>
            </div>
            <div>
               <label>Add Keywords</label>
            </div>
            <div>
               <input type='text'
               // value={keyword1}
               onChange={(e) => setKeywords([e.target.value])} />
            </div>
            <div>
               <input type='text'
               onChange={(e) => setKeywords([...keywords, e.target.value])} />
            </div>
            {keywords.length >= 2  && (
               <div>
               <input type='text'
               // value={keyword2}
               onChange={(e) => setKeywords([...keywords, e.target.value])} />
               </div>
            )}
            {keywords.length >= 3 && (
               <div>
                 <input type='text'
                  onChange={(e) => setKeywords([...keywords, e.target.value])} />
               </div>
            )}
            <div>
               <button type='submit'>Add Intro</button>
            </div>
         </form>
      </div>
   )
}

export default IntroText