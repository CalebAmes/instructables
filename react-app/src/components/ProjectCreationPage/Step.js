import React, { useEffect, useState } from "react";


const StepForm = () => {
    const [steps, setSteps] = useState({});
    const [count, setCount] = useState(1)
    const [image, setImage] = useState(null);
    const [step, setStep] = useState('');

    const addStep = (i, img, val) => {
        let step_count;
        let step_img;
        let step;
        setSteps({ ...steps, [step_count]: i, [step_img]: img, [step]: val })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        addStep(count, image, step)
    }

     const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div>
            <h1>Add Step</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type='file'
                    accept="image/*"
                    onChange={updateImage}
                    />
                </div>
            </form>
        </div>
    )
    }

    export default StepForm