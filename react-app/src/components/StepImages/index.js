import React from 'react'
import './images.css'

export const OneImage = ({ images }) => {
  console.log(images)
  return (
    <div className="one-image">
      <div>
        <img src={images[0]} className="img-one-one" />
      </div>
    </div>
  )
}

export const TwoImages = ({ images }) => {
  console.log(images)
  return (
    <div className="two-images">
      <img src={images[0]} className="img-two-one" />
      <img src={images[1]} className="img-two-two" />
    </div>
  )
}

export const ThreeImages = ({ images }) => {
  console.log(images)
  return (
    <div className="three-images">
      <img src={images[0]} className="img-three-one" />
      <div className="side-images">
        <img src={images[1]} className="img-three-two" />
        <img src={images[2]} className="img-three-three" />
      </div>
    </div>
  )
}
