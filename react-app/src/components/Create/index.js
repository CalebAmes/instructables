import React from 'react'
import Video from '../Video'
import create from '../../images/create.png'
import {Link} from 'react-router-dom';

const Create = ({authenticated}) => {


  return (
    <div>
      <h1>SHARE WHAT YOU MAKE WITH INSTRUCTABLES</h1>
      <p>Instructables is a platform for you to share what you make through words, photos, video and files.</p>
      <p>From a one step recipe to a 100 step jet engine build, everyone has something to share.</p>
      <p>Join the biggest DIY community on the web.</p>
      <div>
       <Link to='/create/new'>New Instructable</Link>
      </div>
      <div>
        <h3>Here's how it works:</h3>
        <div>
          <Video embedId='iStxkeZlZjc'/>
        </div>
      </div>
      <div>
        <h1>WHY PUBLISH AN INSTRUCTABLE?</h1>
        <div>
          <img src={create} />
        </div>
        <div>
          <h4>Everyone has something to share</h4>
          <p>We all have secret skills. Whether it's a special recipe for the best hot chocolate or the perfect way to drive a nail, even the simplest ideas are worth sharing. What's your secret?</p>
        </div>
      </div>
    </div>
  )
}



export default Create
