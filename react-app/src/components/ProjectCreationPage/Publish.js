import React, {useState, useEffect} from 'react';
import Video from '../Video'
import {Redirect, useHistory} from 'react-router-dom'
import './Project.css'

const Publish = ({project, steps, setTable}) => {

   const history = useHistory();

  const getCode = () => {
      const array = steps.step_imgs[0].split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }

   const showProjects = (e) => {
     history.push('/projects')
   }
 


   const goBack = (e) => {
      setTable('project')
   }   



   return (
      <div className='publish-project'>
         <div className='intro'>
            <h1>{project.res.title}</h1>
            <img src={project.res.intro_imgs[0]} alt='intro-img' />
            <p>{project.res.intro}</p>
         </div>
         {steps.map((step, i) => (
            <div key={step.step_count}>
               <h1>{`Step ${step.step_count}: ${step.step_title}`}</h1>
               {step.step_imgs.includes('amazonaws.com') && (
                  <img src={step.step_imgs} alt={`step ${step.step_count} img`}/>
               )}
               {!step.step_imgs.includes('amazonaws.com') && (
                  <Video embedId={getCode()} />
               )}
               <p>{step.step}</p>
            </div>
         ))}
         <div>
           <button type='button' onClick={showProjects}>Genius!</button>
           {/* <button type='button' onClick={goBack}>Hmmm....needs some work</button> */}
         </div>

      </div>
   )
}


export default Publish