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
    <div className='introForm'>
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
                   {/* <Link to='/create/intro'>Start Instructable</Link> */}
                   <button type='submit'>Start Instructable</button>
                </div> 
            </form>
        </div>
        )
    }

    export default ProjectIntro