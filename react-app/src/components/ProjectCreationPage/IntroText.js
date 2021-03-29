import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {createProject} from '../../store/project'
import TextEditor from "../TextEditor";
import Video from '../Video'
import './Text.css'

const IntroText = ({project, setProject, table, setTable, setStepState, stepState}) => {
   const [intro, setIntro] = useState('')
   const [categoryId, setCategoryId] = useState(0)
   const [keywords, setKeywords] = useState([])
   const [keyword, setKeyword] = useState('')
   const dispatch = useDispatch()
   const projectName = project.title.toUpperCase();

   const handleSubmit = async (e) => {
      e.preventDefault()
      const newProject = {...project, 'category_id': categoryId, 'keywords': keywords, 'intro': intro};
      setProject(newProject)
      // setProject({...project, 'category_id': categoryId, 'keywords': keywords, 'intro': intro})
      console.log(newProject, 'newProejct')
      const res = await dispatch(createProject(newProject))
      await console.log(res, 'res')
      await setStepState({'project_id': res.id})
      await setProject({res})
      await setTable('steps')
   }

   
   return (
      <div className='text-form'>
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
               {/* <TextEditor 
               data={intro}
               // value={intro}
               onChange={(e) => setIntro(e.target.value)}
               /> */}
            </div>
            <div className='category-id'>
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
            <div className='keywords'>
               <label>Add Keywords</label>
               <div className='keyword'>
                  <input type='text'
                  // value={keywords}
                  onChange={(e) => setKeywords([e.target.value])} />
               </div>
               <div>
                  <input type='text'
                  // value={keywords}
                  onChange={(e) => setKeywords([...keywords, e.target.value])} />
               </div>
               {keywords.length >= 2  && (
                  <div>
                  <input type='text'
                  // value={keywords}
                  onChange={(e) => setKeywords([...keywords, e.target.value])} />
                  </div>
               )}
               {keywords.length >= 3 && (
                  <div>
                  <input type='text'
                  //   value={keywords}
                     onChange={(e) => setKeywords([...keywords, e.target.value])} />
                  </div>
               )}
            </div>
            <div>
               <button type='submit'>Add Intro</button>
            </div>
         </form>
      </div>
   )
}

export default IntroText