import React, { useEffect, useState } from "react";
import Video from '../Video'
import ProjectIntro from './ProjectIntro'
import IntroMedia from './IntroMedia'
import { authenticate } from "../../services/auth";
import StepForm from "./Step";



const CreateProject = () => {
   const [userId, setUserId] = useState('')
   
   const getUser = async () => {
      const user = await authenticate()
      return user
   }
   
   useEffect(() => {
      const user = getUser()
      .then(() => setUserId(user.id))
   }, [])
   // const user = getUser()
   
   const [project, setProject] = useState({user_id: userId})
   console.log(project)

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
         <StepForm project={project} setProject={setProject}/>
      )
   }

   return (
      <div>
         {form}
      </div>
   )
}


export default CreateProject