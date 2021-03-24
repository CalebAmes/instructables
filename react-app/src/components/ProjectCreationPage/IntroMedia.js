import React, { useEffect, useState } from "react";
import Video from '../Video'


const IntroMedia = () => {
    const [type, setType] = useState('image')
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [project, setProject] = useState({});

    const uploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("intro_img", image);
        setImageLoading(true);

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
        }
        else {
            setImageLoading(false);
            console.log("Something went wrong");
        }
    }

    const embedVideo = (e) => {
        e.preventDefault();
        return (
        <Video embedId={video}/>
        )
    }

      const updateImage = (e) => {
         const file = e.target.files[0];
         setImage(file);
      }

    const updateVideo = (e) => {
      const videoUrl = e.target.value
      const urlArray= video.split('/')
      const embedCode = urlArray[urlArray.length - 1]
      setVideo(embedCode)
    }
    
    return (
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
                        />
                    </div>
                <button type="submit">Submit</button>
                {(imageLoading)&& <p>Loading...</p>}
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
                    <button type="submit">Submit</button>
                </form>
            )}
            </div>
        </div>
    )
}



export default IntroMedia