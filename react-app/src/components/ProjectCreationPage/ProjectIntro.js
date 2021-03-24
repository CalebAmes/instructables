import React, { useEffect, useState } from "react";
import {Redirect, Link} from 'react-router-dom';
import StepForm from './Step'
const ProjectIntro = () => {

    const [title, setTitle] = useState('');
    const [project, setProject] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault()
        setProject({...project, 'title': title})
    }

    return (
    <div>
        <h1>What do you want to share?</h1>
        <div>
            <h3>I made a project called:</h3>
        </div>
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
                   <Link to='/create/intro'>Start Instructable</Link>
                </div>
            </form>
        </div>
        )
    }

    export default ProjectIntro