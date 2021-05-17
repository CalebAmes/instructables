import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import Video from '../Video'
import {publishProject} from '../../store/project'
import {publishSteps} from '../../store/step'
import {Redirect, useHistory} from 'react-router-dom'
import './Project.css'

const Publish = ({setTable}) => {

   const history = useHistory();
   const project = useSelector((state) => state.project.project)
   const steps = useSelector((state) => state.steps.steps)
   const dispatch = useDispatch()

  const getCode = () => {
      const array = steps.step_imgs[0].split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }

   const showProjects = async(e) => {
      const projectData = await dispatch(publishProject(project))
      const project_id = await projectData.id;
      await console.log(project_id, 'proejct id from publish')
      await console.log(projectData, 'proejct data from publish')
      await dispatch(publishSteps(steps, project_id))
     await history.push('/projects')
   }
 
   const goBack = (e) => {
      setTable('project')
   }   

   if(project && steps) {
      return (
         <div className='publish-project'>
            <div className='intro'>
               <h1>{project.title}</h1>
               <img src={project.intro_imgs[0]} alt='intro-img' />
               <p>{project.intro}</p>
            </div>
            {steps.map((step, i) => (
               <div key={step.step_count}>
                  <h1>{`Step ${step.step_count}: ${step.step_title}`}</h1>
                  {step.step_imgs.includes('amazonaws.com') && (
                     <img src={step.step_imgs} alt={`step ${step.step_count} img`}/>
                  )}
                  {step.step_imgs.includes('youtube.com') && (
                     <Video embedId={getCode()} />
                  )}
                  <p>{step.step}</p>
               </div>
            ))}
            <div>
              <button type='button' onClick={showProjects}>Publish!</button>
              {/* <button type='button' onClick={goBack}>Hmmm....needs some work</button> */}
            </div>
   
         </div>
      )
   } else {
      return (
         <h1>loading...</h1>
      )
   }
}


export default Publish