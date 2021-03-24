import React from 'react'
import './images.css'

export const OneImage = ({ images }) => {
  console.log(images)
  return (
    <div className="one-image">
      <img src={images[0]} className="img-one-one" />
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
      <img src={images[0]} />
      <div className="side-images">
        <img src={images[1]} />
        <img src={images[2]} />
      </div>
    </div>
  )
}
