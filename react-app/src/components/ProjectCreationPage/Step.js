import React, { useEffect, useState } from "react";
import Video from '../Video'

const StepForm = ({project, setProject}) => {
    const [type, setType] = useState('image')
    const [image, setImage] = useState(null);
    const [stepImg, setStepImg] = useState(null)
    const [video, setVideo] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [steps, setSteps] = useState({});
    const [count, setCount] = useState(1)
    const [step, setStep] = useState('');

    const addStep = (i, str, img, val) => {
        setSteps({ ...steps, 'step_count': i, 'title': str, 'step_img': img, 'step': val })
    }


    const uploadImage = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("step_img", image);
            setImageLoading(true);

            const res = await fetch('/api/images/intro', {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const json = await res.json();
                setImageLoading(false);
                console.log(project)
            }
            else {
                setImageLoading(false);
                console.log("Something went wrong");
            }
        }

    const handleSubmit = async (e) => {
        e.preventDefault()
        addStep(count, title, image, step)
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
    </div>
    )
    }

//     const StepForm = ({project, setProject}) => {
//         const [type, setType] = useState('image')
//         const [image, setImage] = useState(null);
//         const [introImg, setIntroImg] = useState(null)
//         const [video, setVideo] = useState('');
//         const [imageLoading, setImageLoading] = useState(false);
//         // const [project, setProject] = useState({});

//         const moveOn = (e) => {
//             e.preventDefault();
//             setProject({...project, 'intro_img': image})
//         }


//         const uploadImage = async (e) => {
//             e.preventDefault();
//             const formData = new FormData();
//             formData.append("intro_img", image);
//             setImageLoading(true);

//             const res = await fetch('/api/images/intro', {
//                 method: "POST",
//                 body: formData,
//             });

//             if (res.ok) {
//                 const json = await res.json();
//                 setImageLoading(false);
//                 console.log(project)
//             }
//             else {
//                 setImageLoading(false);
//                 console.log("Something went wrong");
//             }
//         }

//         const embedVideo = (e) => {
//             e.preventDefault();
//             return (
//             <Video embedId={video}/>
//             )
//         }

//         const updateImage = (e) => {
//             const file = e.target.files[0];
//             setImage(file);
//         }

//         const updateVideo = (e) => {
//         const videoUrl = e.target.value
//         const urlArray= video.split('/')
//         const embedCode = urlArray[urlArray.length - 1]
//         setVideo(embedCode)
//         }
        
//         return (
//             <div className='upload'>
//                 <div className='uploadNav'>
//                     <div className='imageUpload'>  
//                         <h4 
//                         onClick={() => setType('image')}>
//                         Upload Photos
//                         </h4>
//                     </div>
//                     <div className='embedVideo'>
//                         <h4 onClick={() => setType('video')}>
//                         Embed a Video
//                         </h4>
//                     </div>
//                 </div>
//                 <div>
//                     <form onSubmit={moveOn}>
//                     </form>
//                 {type === 'image' && (
//                     <form onSubmit={uploadImage}>
//                         <div>
//                             <input
//                             type="file"
//                             accept="image/*"
//                             onChange={updateImage}
//                             multiple
//                             />
//                         </div>
//                     <button type="submit">Upload Photo</button>
//                     {(imageLoading)&& <p>Loading...</p>}
//                     <div>
//                         <img 
//                         src={introImg}
//                         style={{width: '500px'}} 
//                         />
//                     </div>
//                 </form>
//                 )}
//                 {type === 'video' && (
//                     <form onSubmit={embedVideo}>
//                         <div>
//                             <input
//                             name='video'
//                             type='url'
//                             onChange={updateVideo}
//                             value={video}
//                             />
//                         </div>
//                         <button type="submit">Embed Video</button>
//                     </form>
//                 )}
//                 <button type="submit">Done</button>
//                 </div>
//             </div>
//         )
//     }

export default StepForm