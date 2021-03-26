import React, { useEffect, useState } from "react";

const IntroMedia = ({project, setProject}) => {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [introImg, setIntroImg] = useState('')
    const [userId, setUserId] = useState(1)

    const moveOn = (e) => {
        setProject({...project, 'user_id': userId, 'intro_imgs': introImg, 'image': image})
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
            // console.log(json.url, 'json.url')
            // console.log(json.user_id, 'json.user_id')
            // await setProject({...project, 'user_id': userId, 'intro_imgs': image})
        }
        else {
            setImageLoading(false);
            console.log("Something went wrong");
        }
    }

      const updateImage = (e) => {
         const file = e.target.files[0];
         setImage(file);
      }
    
    return (
        <div className='upload'>
            <h4>Upload Photos</h4>
            <div className=''>
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
                        src={introImg}
                        style={{width: '500px'}} 
                        />
                    </div>
                </form>
            </div>
            <button type='button' onClick={moveOn}>Move onto Intro</button>
        </div>
    )
}


export default IntroMedia