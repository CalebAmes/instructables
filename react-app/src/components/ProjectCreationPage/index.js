import React, { useEffect, useState } from "react";
import Video from '../Video'
import ProjectIntro from './ProjectIntro'
import IntroMedia from './IntroMedia'
import IntroText from './IntroText'
import StepMedia from "./StepMedia";
import StepForm from './StepForm'
// import c from './ProjectCreation.module.css'
import {useSelector, useDispatch} from 'react-redux'

const CreateProject = () => {
   const [userId, setUserId] = useState(1)
   const [project, setProject] = useState({})
   const [stepCount, setStepCount] = useState(0)
   const [stepState, setStepState] = useState({})
   const [table, setTable] = useState('projects')
   const dispatch = useDispatch()
   
   let form = (
      <ProjectIntro project={project} setProject={setProject}/>
   );

   if (project['title']) {
      form = (
         <IntroMedia project={project} setProject={setProject}/>
      )
   }

   if (project['intro_imgs']) {
      form = (
         <IntroText 
         project={project} setProject={setProject}
         table={table} setTable={setTable}/>
      )
   }

   if (table === 'steps') {
      form = (
         <StepMedia 
         project={project} setProject={setProject} 
         stepCount={stepCount} setStepCount={setStepCount}
         stepState={stepState} setStepState={setStepState}
         table={table} setTable={setTable} />
      )
   }

    if (Object.keys(stepState).includes('step_imgs')) {
      form = (
         <StepForm 
         project={project} setProject={setProject}
         table={table} setTable={setTable} 
         stepState={stepState} setStepState={setStepState} 
         stepCount={stepCount} setStepCount={setStepCount}/>
      )
   }

   return (
      <div>
         {form}
      </div>
   )
}


export default CreateProject