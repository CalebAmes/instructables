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
    <Carousel images={ images } />
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
        <hr/>
        <h1>YOURS FOR THE MAKING</h1>
        <h3>Instructables is a community for people who like to make things.<br/>Come explore, share, and make your next project with us!</h3>
        <hr/>
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