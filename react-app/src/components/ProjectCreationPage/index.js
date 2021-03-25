import React, { useEffect, useState } from "react";
import Video from '../Video'
import ProjectIntro from './ProjectIntro'
import IntroMedia from './IntroMedia'
// import { authenticate } from "../../services/auth";
import StepForm from "./Step";
// import {authenticateUser} from '../../store/session'
import {useSelector, useDispatch} from 'react-redux'

const CreateProject = () => {
   const [userId, setUserId] = useState('')
   const [project, setProject] = useState({user_id: 1})
   const dispatch = useDispatch()

   // const getUser = async () => {
   //    const user = await authenticate()
   //    return user
   // }
   
   // useEffect(() => {
   //    dispatch(authenticateUser())
   // }, [])
  
   // const user = useSelector((state) => state.session.user)
   // console.log(project)

   // if (user) {
   //    setUserId(user.id)
   //    let key = 'user_id';
   //    setProject({...project, [key]: userId})
   // }

   let form = (
      <ProjectIntro project={project} setProject={setProject}/>
   );

   if (project['title']) {
      form = (
         <IntroMedia project={project} setProject={setProject}/>
      )
   }

   if (project['intro_img']) {
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