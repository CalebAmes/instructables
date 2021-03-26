import React from 'react'
import Video from '../Video'
import create from '../../images/create.png'
import {Link} from 'react-router-dom';
import avatars from '../../images/av-1.jpg'
import press from '../../images/as-seen-on.png'
import prize from '../../images/robot-prize.jpg'
import img1 from '../../images/how-1.jpg'
import img2 from '../../images/how-2.jpg'
import img3 from '../../images/how-3.jpg'
import bg from '../../images/create-makesomething.jpg'

const howImgs = [img1, img2, img3]
const howTxts= [
  'Make something, and document the process as you go.', 
  'Create a new instructable. Explain what you made with text, images, video, and files.', 
  'Publish your amazing project to the web, and feel the love!'
]

const Create = () => {
  
  return (
    <div>
      <h1>SHARE WHAT YOU MAKE WITH INSTRUCTABLES</h1>
      <p>Instructables is a platform for you to share what you make through words, photos, video and files.</p>
      <p>From a one step recipe to a 100 step jet engine build, everyone has something to share.</p>
      <p>Join the biggest DIY community on the web.</p>
      <div className='new-btn'>
       <Link to='/create/new'>New Instructable</Link>
      </div>
      <div>
        <h2>Here's how it works:</h2>
        <div className='video'>
          <Video embedId='iStxkeZlZjc'/>
        </div>
      </div>
      <div>
        <h1>WHY PUBLISH AN INSTRUCTABLE?</h1>
        <div>
          <img src={create} alt='robots'/>
        </div>
        <div>
          <h2>Everyone has something to share</h2>
          <p>We all have secret skills. Whether it's a special recipe for the best hot chocolate or the perfect way to drive a nail, even the simplest ideas are worth sharing. What's your secret?</p>
        </div>
      </div>
      <div className = 'avatar'>
        <img src={avatars} alt='avatars' />
      </div>
      <div>
        <h2>Join the community</h2>
        <p>The instructables community is one of the most welcoming and supportive DIY communities out there. Connect with other makers and get involved! You might be surprised how good you'll feel.</p>
      </div>
      <div>
        <img src={press} alt='as seen on'/>
        <h2>As seen on...</h2>
        <p>Instructables has a huge reach. Our top authors have been featured across major online and traditional media channels. Businesses have been born, and true callings found.</p>
        <p>Who knows what might happen when you put your creative ideas out there?</p>
        <Link to='/community'>Instructables success stories</Link>
      </div>
      <div>
        <img src={prize} alt='robot prizes'/>
        <h2>Win amazing prizes</h2>
        <p>Contests are a great way to participate and get inspired. We give away thousands of dollars' worth of prizes every month, including big ticket items like laser cutters, 3D printers, and more.</p>
        <p>Put your making skills to the test!</p>
        <Link to='/contests'>Current Contests</Link>
      </div>
      <div>
        <h1>HOW IT WORKS</h1>
        <div className='video-link'>
          <p>Watch the Video</p>
        </div>
        <div className='how-imgs' style={{display: 'flex'}}>
          {howImgs.map((img, i) => (
          <div>
                <img src={img} key={`img${i}`} alt='how' />
                <p>{howTxts[i]}</p>
          </div>
          ))}
        </div>
        <div>
          <h2>There's a class for that!</h2>
          <p>Want more information about how to create an instructable? Learn more from jessyratfink, who published her first instructable nearly 10 years ago and now has over 500 instructables under her belt!</p>
          <Link to='/how-to'>How to Write an Instructable Class</Link>
        </div>
        <div>
          <img src={bg} alt='make something' style={{width: '100%'}}/>
        </div>
      </div>
    </div>
  )
}



export default Create
