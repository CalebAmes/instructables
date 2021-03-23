
// this will be the intro/instructions page to create a project.
// it will have a button that takes the user to create a new project.
import React from 'react'
import ProjectIntro from '../ProjectCreationPage'

const Create = () => {

  const click = () => {
    return (
      <ProjectIntro />
    )
  }

  return (
    <div>
      <h1>SHARE WHAT YOU MAKE WITH INSTRUCTABLES</h1>
      <p>Instructables is a platform for you to share what you make through words, photos, video and files.</p>
      <p>From a one step recipe to a 100 step jet engine build, everyone has something to share.</p>
      <p>Join the biggest DIY community on the web.</p>
      <div>
        <button 
        type='button'
        onClick={click}
        >
          New Instructable</button>
      </div>
    </div>
  )
}


export default Create
