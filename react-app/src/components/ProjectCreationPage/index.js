import React, { useEffect, useState } from "react";
import ProjectIntro from './ProjectIntro'
import IntroMedia from './IntroMedia'
import IntroText from './IntroText'
import StepMedia from "./StepMedia";
import StepForm from './StepForm'
import Publish from './Publish'
import {useSelector, useDispatch} from 'react-redux'

const CreateProject = () => {
   const [userId, setUserId] = useState(1)
   const [project, setProject] = useState({})
   const [stepCount, setStepCount] = useState(1)
   const [stepState, setStepState] = useState({})
   const [table, setTable] = useState('projects')
   const [steps, setSteps] = useState([])
   const [publish, setPublish] = useState(false)
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
         table={table} setTable={setTable}
         stepState={stepState} setStepState={setStepState}/>
      )
   }

   if (table === 'steps') {
      form = (
         <StepMedia 
         project={project} setProject={setProject} 
         stepCount={stepCount} setStepCount={setStepCount}
         stepState={stepState} setStepState={setStepState}
         table={table} setTable={setTable}
         publish={publish} setPublish={setPublish} />
      )
   }

    if (Object.keys(stepState).includes('step_imgs')) {
      form = (
         <StepForm 
         project={project} setProject={setProject}
         table={table} setTable={setTable} 
         stepState={stepState} setStepState={setStepState} 
         stepCount={stepCount} setStepCount={setStepCount}
         steps={steps} setSteps={setSteps}
         publish={publish} setPublish={setPublish}/>
      )
   }

   if (publish === true) {
      form = (
         <Publish project={project} steps={steps} />
      )
   }

   return (
      <div>
         {form}
      </div>
   )
}


export default CreateProject