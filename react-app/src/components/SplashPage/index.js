import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../store/currentUser'
import './SplashLanding.css'
import badDog from '../../icons/badDog.jpeg'
import goodDog from '../../icons/goodDog.jpeg'
import dogTrouble from '../../icons/dogTrouble.png'
import ClickProject from '../ClickableProjectComponent'


function SplashPage(){
  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(setCurrentUser())
  })
  const images = [ badDog, goodDog, dogTrouble ];
  
  return(
    <>
    <Carousel images={ images } />
    <div className='welcomeDiv'>
    <div className='holder'>
      <h1>STEP-BY-STEP</h1>
      <h3>We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</h3>
    </div>
    <div className='holder'>
      <h1>MADE BY YOU</h1>
      <h3>Instructables are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</h3>
    </div>
    <div className='holder'>
      <h1>A HAPPY PLACE</h1>
      <h3>Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.</h3>
    </div>
    </div>
    <h1 id='explore'>EXPLORE PROJECTS</h1>
    </>
  )
}


export const Carousel = ({ images }) => {

  const One = () => (
    <div 
      className='divImage imageOne' 
      style={{ background:'url('+images[0]+') no-repeat center center fixed', backgroundSize: 'cover', height: '535px'}}/>
  )

  const Two = () => (
    <div 
    className='divImage imageTwo' 
    style={{ background:'url('+images[1]+') no-repeat center center fixed', backgroundSize: 'cover', height: '535px'}}/>
  )

  const Three = () => (
    <div 
      className='divImage imageThree' 
      style={{ background:'url('+images[2]+') no-repeat center center fixed', backgroundSize: 'cover', height: '535px'}}/>
  )

  return (
    <>
      <div className='carouselText'>
        <h1>YOURS FOR THE MAKING</h1>
        <h3>Instructables is a community for people who like to make things.<br/>Come explore, share, and make your next project with us!</h3>
      </div>
      <div className='imageDiv'>
        <Images one={<One/>} two={<Two/>} three={<Three/>} />
      </div>
    </>
  )
}
  export function Images (props) {
    const [ imageOne, setImageOne ] = useState(true);
    const [ imageTwo, setImageTwo ] = useState(false);
    const [ imageThree, setImageThree ] = useState(false);
    const [seconds, setSeconds] = useState(0);
    
    const stateSwitcherOne = () => {
      if(imageOne){
        setImageOne(false);
        setImageTwo(true);
      }
    }
    const stateSwitcherTwo = () => {
      if(imageTwo){
        setImageTwo(false);
        setImageThree(true);
      }
    }
    const stateSwitcherThree = () => {
      if(imageThree){
        setImageThree(false);
        setImageOne(true);
      }
    }

    const carouselClick = () => {
      stateSwitcherOne();
      stateSwitcherTwo();
      stateSwitcherThree();
    }    

    useEffect(() => {

      const interval = setInterval(()=>{
        setSeconds(seconds => seconds + 3);
        stateSwitcherOne();
        stateSwitcherTwo();
        stateSwitcherThree();
    }, 3000)
    return () => clearInterval(interval)

  },)

  return(
    <>
      <div className='imageDiv' onClick={carouselClick}>
        { imageOne && props.one }
        { imageTwo && props.two }
        { imageThree && props.three}
      </div>
    </>
  )
}

export default SplashPage