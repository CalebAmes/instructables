import React, { useEffect, useState } from "react";
import {Redirect, Link} from 'react-router-dom';
import './ProjectCreation.css'

const ProjectIntro = ({project, setProject}) => {

    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        let key = 'title'
        setProject({...project, [key]: title})
    }

    return (
    <div className='project-form'>
        <div className='new-project'>
            <div className='what'>
                <h1>WHAT DO YOU WANT TO SHARE?</h1>
            </div>
            <div>
                <h3>I made a project called:</h3>
            </div>
            <div className='title-form'>
                <form onSubmit = {handleSubmit}>
                    <div className='projectTitle'>
                    <input 
                    type='text'
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                    </div>
                    <div>
                    <button type='submit'>Start Instructable</button>
                    </div> 
                </form>
            </div>
        </div>
    </div>    
    )}

    export default ProjectIntro