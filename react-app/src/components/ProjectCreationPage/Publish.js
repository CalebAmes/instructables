import React, {useState, useEffect} from 'react';
import Video from '../Video'

const Publish = ({project, steps}) => {

  const getCode = () => {
      const array = steps.step_imgs[0].split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }
   console.log(project, 'project in publish', steps, 'steps in publish')

   return (
      <div>
         <div className='intro'>
            <h1>{project.res.title}</h1>
            <img src={project.res.intro_imgs[0]} alt='intro-img' />
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
            {/* <p>{project.res.keywords}</p> */}
         </div>

      </div>
   )
}


export default Publish