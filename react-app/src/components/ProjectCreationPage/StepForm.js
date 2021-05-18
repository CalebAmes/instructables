import React, { useEffect, useState, Component } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Video from '../Video'
import {addAStep} from '../../store/step'
import {Redirect} from 'react-router-dom'
import './Text.css'
import TextEditor from '../TextEditor'

const StepForm = ({stepCount, setStepCount, stepState, setStepState, publish, setPublish, steps, setSteps}) => {
   
   const dispatch = useDispatch()
   const [step, setStep] = useState('')
   const [title, setTitle] = useState('')
   const project = useSelector((state) => state.project.project)
   // const projectName = project.title.toUpperCase()
   // const stepMediaObj = useSelector((state) => state.steps.media)
   // if (stepMediaObj) console.log(stepMediaObj, 'step media object in step form')

   const handleSubmit = async (e) => {
      e.preventDefault()
      const newStep = {...stepState, 'step_title': title, 'step': step}
      setStepState(newStep)
      // console.log(newStep, 'step from step submit')
      setSteps([...steps, newStep])
      const res = await dispatch(addAStep(newStep))
      // console.log(res, 'res from step submit!')
      const newStepState = {'temp_id': project.temp_id}
      await setStepState(newStepState)
      await setStepCount(stepCount + 1)
   }

   const done = async (e) => { 
      e.preventDefault()
      const newStep = {...stepState, 'step_title': title, 'step': step}
      setStepState(newStep)
      setSteps([...steps, newStep])
      const res = await dispatch(addAStep(newStep))
      const newStepState = {'temp_id': res.id}
      await setStepState(newStepState)
      await setStepCount(stepCount + 1)
      setPublish(true)
   }

   const getCode = () => {
      const array = stepState.step_imgs.split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }

   return (
      <div className='text-form'>
         <h1>{`Step ${stepCount}`}</h1>
         {stepState.step_imgs.includes('amazonaws.com') && (
            <img src={stepState.step_imgs} alt='step image'/>
         )}
         {stepState.step_imgs.includes('youtu') && (
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
               {/* <TextEditor
               // value={step}
               data={step}
               onChange={(e) =>setStep(e.target.value)}
               /> */}
               <textarea
               name='step' 
               value={step}
               onChange={(e) => setStep(e.target.value)} 
               placeholder={`step ${stepCount} body`}
               />
            </div>
            <div>
               <button type='submit'>Add Step</button>
            </div>
         </form>
         <button type='button' onClick={done}>Publish</button>
      </div>
   )
}

export default StepForm;