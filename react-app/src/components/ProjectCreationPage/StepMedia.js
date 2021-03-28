import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import Video from '../Video'
import StepForm from "./StepForm";
import './ProjectCreation.css'
// import {useDispatch} from 'react-redux'

const StepMedia = ({project, stepCount, setStepCount, stepState, setStepState, publish, setPublish}) => {
    const [type, setType] = useState('image')
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [code, setCode] = useState('')
    const [stepImg, setStepImg] = useState('')

     console.log(project, 'project in stepmedia')


    const moveOn = (e) => {
        e.preventDefault()
        if (image) {
            setStepState({ ...stepState, 'step_count': stepCount, 'project_id': project.res.id, 'step_imgs': stepImg})
        }
        else if (video) {
            setStepState({ ...stepState, 'step_count': stepCount, 'project_id': project.res.id, 'step_imgs': video})
        }
        else {
            setStepState({ ...stepState, 'step_count': stepCount, 'project_id': project.res.id})
        }
    }

//     const done = () => {
//       setPublish(true)
//    }

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
        const array = video.split('/')
        const embedCode = array[array.length - 1]
        setCode(embedCode)
    }


     const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
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
                <div className='project-form'>
                    {type === 'image' && (
                    <form onSubmit={uploadImage}>
                        <div>
                            <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            // multiple
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
                            onChange={(e) => setVideo(e.target.value)}
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
                {/* <button type="button" onClick={publish}>That's enough steps. Let's publish!</button> */}
                </div>
            </div>
        )
    }
    

export default StepMedia