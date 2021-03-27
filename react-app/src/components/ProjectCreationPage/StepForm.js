import React, { useEffect, useState, Component } from "react";
import {useDispatch} from 'react-redux'
import Video from '../Video'
import {addAStep} from '../../store/step'
import {Redirect} from 'react-router-dom'
import './ProjectCreation.css'
import TextEditor from '../TextEditor'

const StepForm = ({project, stepCount, setStepCount, stepState, setStepState}) => {
   
   const dispatch = useDispatch()
   const [step, setStep] = useState('')
   const [title, setTitle] = useState('')
   console.log(project, 'project in stepform')
   const handleSubmit = async (e) => {
      e.preventDefault()
      const newStep = {...stepState, 'step_title': title, 'step': step}
      setStepState(newStep)
      console.log(stepState, 'stepState')
      dispatch(addAStep(newStep))
      setStepState({})
      setStepCount(stepCount + 1)
   }

   const done = () => {
      return (
         <Redirect to='/publish' />
      )
   }

   const getCode = () => {
      const array = stepState.step_imgs.split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }

   return (
      <div>
         <h1>{project.title}</h1>
         {stepState.step_imgs.includes('amazonaws.com') && (
            <img src={stepState.step_imgs} alt='step image'/>
         )}
         {!stepState.step_imgs.includes('amazonaws.com') && (
            <Video embedId={getCode()} />
         )}
         <form onSubmit={handleSubmit}>
            <div>
               <input 
               type='text'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder={`step ${stepCount} title`}
               />
            </div>
            <div>
               <TextEditor
               onChange={(e) =>setStep(e.target.value)}
               value={step}
               data="<p>{`step ${stepCount} body`}</p>"
               />
               {/* <textarea
               name='step' 
               value={step}
               onChange={(e) => setStep(e.target.value)} 
               placeholder={`step ${stepCount} body`}
               /> */}
            </div>
            <div>
               <button type='submit'>Add Step</button>
            </div>
         </form>
         <button type='button' onClick={done}>That's enough steps, I'm ready to publish!</button>
      </div>
   )
}

export default StepForm;