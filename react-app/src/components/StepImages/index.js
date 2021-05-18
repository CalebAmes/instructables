import React from 'react'
import './images.css'
import Video from '../Video'


export const OneImage = ({ images }) => {
    const getCode = (url) => {
      const array = url.split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }

  return (
    <div className="one-image">
      <div>
        {images[0].includes('amazonaws.com') && (
        <img src={images[0]} className="img-one-one" />
        )}
        {images[0].includes('youtu') && (
            <Video embedId={getCode(images[0])} />
        )}
      </div>
    </div>
  )
}

export const TwoImages = ({ images }) => {
    const getCode = (url) => {
      const array = url.split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }

  return (
    <div className="two-images">
      {images[0].includes('amazonaws.com') && (
      <img src={images[0]} className="img-two-one" />
      )}
      {images[0].includes('youtu') && (
      <Video embedId={getCode(images[0])} className="img-two-one"/>
      )}
      {images[1].includes('amazonaws.com') && (
      <img src={images[1]} className="img-two-two" />
      )}
      {images[1].includes('youtu') && (
      <Video embedId={getCode(images[1])} className="img-two-two" />
      )}
    </div>
  )
}

export const ThreeImages = ({ images }) => {
    const getCode = (url) => {
      const array = url.split('/')
      const embedCode = array[array.length - 1]
      return embedCode
   }
  return (
    <div className="three-images">
      {images[0].includes('amazonaws.com') && (
      <img src={images[0]} className="img-three-one" />
      )}
      {images[0].includes('youtu') && (
      <Video embedId={getCode(images[0])} className="img-three-one"/>
      )}
      <div className='side-images'>
      {images[1].includes('amazonaws.com') && (
      <img src={images[1]} className="img-three-two"/>
      )}
      {images[1].includes('youtu') && (
      <Video embedId={getCode(images[1])} className="img-three-two"/>
      )}
      {images[2].includes('amazonaws.com') && (
      <img src={images[2]} className="img-three-three" />
      )}
      {images[2].includes('youtu') && (
      <Video embedId={getCode(images[2])} className="img-three-three" />
      )}
      </div>
    </div>
  )
}
