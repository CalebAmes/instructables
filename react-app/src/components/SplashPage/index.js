import React,{ useEffect, useState } from 'react'
import './SplashLanding.css'
import badDog from '../../icons/badDog.jpeg'
import goodDog from '../../icons/goodDog.jpeg'
import dogTrouble from '../../icons/dogTrouble.png'


function SplashPage(){
  const images = [ badDog, goodDog, dogTrouble ]

  return (
    <div className='imageDiv'>
      <Images 
        one={<img className='divImage' src={images[0]}/>} 
        two={<img className='divImage' src={images[1]}/>} 
        three={<img className='divImage' src={images[2]}/>}
         />
      {/* <IntervalExample /> */}
    </div>
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