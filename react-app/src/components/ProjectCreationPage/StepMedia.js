import React, { useEffect, useState } from "react";
import Video from '../Video'
// import {useDispatch} from 'react-redux'

const StepMedia = ({project, stepCount, setStepCount, stepState, setStepState}) => {
    const [type, setType] = useState('image')
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [code, setCode] = useState('')
    const [stepImg, setStepImg] = useState(null)
    // const dispatch = useDispatch()

    const addStep = (i, j, img ) => {
        setStepCount(stepCount + 1)
        return setStepState({ ...stepState, 'step_count': i, 'project_id':j, 'step_imgs': img})
    }

    const moveOn = (e) => {
        e.preventDefault()
        if (image) {
            setStepState({ ...stepState, 'step_count': stepCount, 'project_id':100, 'step_imgs': stepImg})
        }
        else if (video) {
            setStepState({ ...stepState, 'step_count': stepCount, 'project_id':100, 'step_imgs': video})
        }
        else {
            setStepState({ ...stepState, 'step_count': stepCount, 'project_id':100, 'step_imgs': null})
        }
    }

    const uploadImage = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("step_img", image);
            setImageLoading(true);

            const res = await fetch('/api/images/steps', {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const json = await res.json();
                await setStepImg(json.url)
                setImageLoading(false);
            }
            else {
                setImageLoading(false);
                console.log("Something went wrong");
            }
        } 


    const embedVideo = (e) => {
        e.preventDefault()
    }


     const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }


    const updateVideo = (e) => {
        const url = e.target.value;
        const array = url.split('/')
        const code = array[array.length - 1]
         setVideo(code)
    }

    return (
        <div>
            <h1>Add Step</h1>
            <div className='upload'>
                <div className='uploadNav'>
                    <div className='imageUpload'>  
                        <h4 
                        onClick={() => setType('image')}>
                        Upload Photos
                        </h4>
                    </div>
                    <div className='embedVideo'>
                        <h4 onClick={() => setType('video')}>
                        Embed a Video
                        </h4>
                    </div>
                </div>
                <div>
                    {type === 'image' && (
                    <form onSubmit={uploadImage}>
                        <div>
                            <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            multiple
                            />
                        </div>
                        <button type="submit">Upload Photo</button>
                        {(imageLoading)&& <p>Loading...</p>}
                        <div>
                            <img 
                            src={stepImg}
                            style={{width: '500px'}} 
                            />
                        </div>
                    </form>
                    )}
                    {type === 'video' && (
                    <form onSubmit={embedVideo}>
                        <div>
                            <input
                            name='video'
                            type='url'
                            onChange={updateVideo}
                            value={video}
                            />
                        </div>
                        <div>
                        <button type="submit">Embed Video</button>
                        </div>
                        {video && (
                        <div>
                            <Video embedId={code}/>
                        </div>
                        )}
                    </form>
                    )}
                </div>
                <button type="button" onClick={moveOn}>Done</button>
                </div>
            </div>
        )
    }
    

export default StepMedia