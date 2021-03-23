import React, { useEffect, useState } from "react";


const StepForm = () => {
    const [steps, setSteps] = useState({});
    // const addStepImg = (i, val) => {
    //     const key = `img: ${i}`;
    //     setState({ ...state, [key]: val })
    // }

    const addStep = (i, img, val) => {
        const imgKey = `step ${i}`;
        const stepKey = `img ${i}`;
        setState({ ...state, [imgKey]: img, [stepKey]: val })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatchEvent()
    }

    return (

    )
    }

    export default StepForm