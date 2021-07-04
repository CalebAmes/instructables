import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Video from '../Video'
import StepForm from "./StepForm";
import './Media.css'
// import {useDispatch} from 'react-redux'

const StepMedia = ({ project, stepCount, setStepCount, stepState, setStepState, publish, setPublish }) => {
  const [type, setType] = useState('image')
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const [code, setCode] = useState('')
  const [stepImg, setStepImg] = useState('')

  const moveOn = (e) => {
    e.preventDefault()
    if (image) {
      setStepState({ ...stepState, 'step_count': stepCount, 'project_id': project.res.id, 'step_imgs': stepImg })
    }
    else if (video) {
      setStepState({ ...stepState, 'step_count': stepCount, 'project_id': project.res.id, 'step_imgs': video })
    }
    else {
      setStepState({ ...stepState, 'step_count': stepCount, 'project_id': project.res.id })
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
    <div className='step-media'>
      <h1>{`Step ${stepCount} Image`}</h1>
      <div className='upload'>
        <div className='uploadNav'>
          <div className='imageUpload'>
            <p
              onClick={() => setType('image')}>
              Upload Photos
            </p>
          </div>
          <div className='embedVideo'>
            <p onClick={() => setType('video')}>
              Embed a Video
            </p>
          </div>
        </div>
        <div className='media-form'>
          <div className='new-media'>
            {type === 'image' && (
              <form onSubmit={uploadImage}>
                <div className='upload-photo'>
                  <label className='file-input'>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={updateImage}
                    />
                    Upload Image
                  </label>
                  <button type="submit">Done</button>
                  {(imageLoading) && <p>Loading...</p>}
                  <div>
                    <img
                      src={stepImg}
                      style={{ width: '500px' }}
                    />
                  </div>
                </div>
              </form>
            )}
            {type === 'video' && (
              <form onSubmit={embedVideo}>
                <div className='video-input'>
                  <input
                    name='video'
                    type='url'
                    onChange={(e) => setVideo(e.target.value)}
                    value={video}
                  />
                  <button type="submit">Embed Video</button>
                  {video && (
                    <div>
                      <Video embedId={code} />
                    </div>
                  )}
                </div>
              </form>
            )}
            <button type="button" onClick={moveOn}>Add Step Body</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default StepMedia
