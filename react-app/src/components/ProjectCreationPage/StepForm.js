import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import Video from '../Video'
import {addAStep} from '../../store/step'

const StepForm = ({project, stepCount, stepState, setStepState}) => {
   
   const dispatch = useDispatch()
   const [step, setStep] = useState('')
   const [title, setTitle] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      setStepState({...stepState, 'step_title': title, 'step': step})
      console.log(stepState, 'stepState')
      dispatch(addAStep(stepState))
      setStepState({})
   }

   return (
      <div>
         <h1>{project.title}</h1>
         {stepState.image.includes('amazonaws.com') && (
            <img src={stepState.image} alt='step image'/>
         )}
         {!stepState.image.includes('amazonaws.com') && stepState.image (
            <Video embedId={stepState.image} />
         )}
         <form onSubmit={handleSubmit}>
            <div>
               <input 
               type='text'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div>
               <textarea
               name='step' 
               value={step}
               onChange={(e) => setStep(e.target.value)} 
               />
            </div>
            <div>
               <button type='submit'>Add Step</button>
            </div>
         </form>
      </div>
   )
}

export default StepForm;