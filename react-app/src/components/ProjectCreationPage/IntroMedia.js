import React, { useEffect, useState } from "react";
import './Media.css'

const IntroMedia = ({project, setProject}) => {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [introImg, setIntroImg] = useState(null)
    const [userId, setUserId] = useState(0)

    const moveOn = (e) => {
        setProject({...project, 'user_id': userId, 'intro_imgs': introImg})
    }


    const cancel = (e) => {
        setImage(null)
        setIntroImg(null)
        setProject({...project, 'user_id': userId})
    }


    const uploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("intro_img", image);
        setImageLoading(true);
        const res = await fetch('/api/images/intro', {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            const json = await res.json();
            setImageLoading(false);
            await setIntroImg(json.url)
            await setUserId(json.user_id)
        }
        else {
            setImageLoading(false);
            console.log("Something went wrong");
            return (
                <p style={{color: 'red'}}>
                    There was an error with your upload. Please try again.
                </p>
            )
        }
    }

      const updateImage = (e) => {
         const file = e.target.files[0];
         setImage(file);
      }
    
    return (
        <div className='media-form'>
            <div className='new-media'>
                <h1>ADD AN INTRO IMAGE</h1>
                <form onSubmit={uploadImage}>
                    <div className='upload-photo'>
                        <label className='file-input'>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            />
                        Upload an Image
                        </label>
                        <div>
                            <button type="submit">Done</button>
                        </div>
                        {(imageLoading)&& <p>Loading...</p>}
                        <div className='image'>
                            <img 
                            src={introImg}
                            style={{width: '500px'}} 
                            />
                        </div>
                        <div className='submit-btns'>
                            <button type='button' onClick={moveOn}>Move onto Intro</button>
                            <button type='button' onClick={cancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default IntroMedia