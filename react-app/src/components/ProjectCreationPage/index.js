import React, { useEffect, useState } from "react";
import {Redirect} from 'react-router-dom';

const ProjectIntro = () => {
    // const [steps, setSteps] = useState({});
    const [title, setTitle] = useState('');
    const [project, setProject] = useState({});


    const addStep = (i, img, val) => {
        const imgKey = `step ${i}`;
        const stepKey = `img ${i}`;
        setState({ ...state, [imgKey]: img, [stepKey]: val })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProject({...project, 'title': title})
        return <Step project={project} />
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
                value={title}
                onChange={() => setTitle(e.target.value)}
                />
                </div>
                <div>
                    <button type='submit'>Start Instructable</button>
                </div>
            </form>
        </div>
        )
    }

    export default ProjectIntro