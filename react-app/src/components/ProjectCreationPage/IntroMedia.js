import React, { useEffect, useState } from "react";


const IntroMedia = ({project, setProject}) => {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [introImg, setIntroImg] = useState('')

    const moveOn = (e) => {
        setProject({...project, 'intro_img': image})
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
            setIntroImg(json.url)
            console.log(project)
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
            <div>
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
                        src={introImg}
                        style={{width: '500px'}} 
                        />
                    </div>
                </form>
            </div>
            <button type='button' onClick={moveOn}>Move On to Steps</button>
        </div>
    )
}



export default IntroMedia