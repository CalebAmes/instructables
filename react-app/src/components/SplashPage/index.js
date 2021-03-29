import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setCurrentUser } from '../../store/currentUser'
import { getProjects } from '../../store/project';
import { getCategory } from '../../store/category';
import { getUsers } from '../../store/user';
import './SplashLanding.css'
import badDog from '../../icons/leatherTools.jpeg'
import goodDog from '../../icons/cooking2.jpeg'
import dogTrouble from '../../icons/3dprinter.jpeg'
import ClickProject from '../ClickableProjectComponent'
import Footer from '../Footer'



function SplashPage(){
  const dispatch = useDispatch()
  const projectItems = useSelector((state) => state.project);
  const categoryItems = useSelector((state) => state.category);
  const userItems = useSelector((state) => state.user);
  const [data, setData] = useState(false);
  const [isSplashLoaded, setIsSplashLoaded] = useState(false)

  const projectArray = Object.values(projectItems);
  const categoryArray = Object.values(categoryItems);

  
  useEffect(async () => {
    await dispatch(getProjects())
    await dispatch(setCurrentUser())
    await dispatch(getCategory())
    await setIsSplashLoaded(true)
    // await catData(projectArray)
  }, [dispatch])

  const images = [ badDog, goodDog, dogTrouble ];

  return(
    <>
    { isSplashLoaded && (
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
    <div className='exploreDiv'>
      <h1 id='explore'>EXPLORE PROJECTS</h1>
    </div>
    <div className='categoryHolderDiv'>
    <CategoryHolder />
    </div>
    <div className='padding'></div>
    <Footer/>
    </>
    )}
    </>
  )
}

export const CategoryHolder = () => {
  const projectItems = useSelector((state) => state.project)
  const userItems = useSelector((state) => state.user)
  const categoryItems = useSelector((state) => state.category)

  useEffect(()=>{
    getCategory()
    getProjects()
    getUsers()
  }, [])

  const projects = Object.values(projectItems)
  const cat1 = projects.filter(project=>project?.category_id == 1).slice(0,4)
  const cat2 = projects.filter(project=>project?.category_id == 2).slice(0,4)
  const cat3 = projects.filter(project=>project?.category_id == 3).slice(0,4)
  const cat4 = projects.filter(project=>project?.category_id == 4).slice(0,4)
  const cat5 = projects.filter(project=>project?.category_id == 5).slice(0,4)
  const cat6 = projects.filter(project=>project?.category_id == 6).slice(0,4)

  const data = [cat1, cat2, cat3, cat4, cat5, cat6]

  console.log(data)

  return(
    <div>
      {
        data.map(projectArray=>(
          <div className='splashCategoryHolder'>
            <h1>{categoryItems[projectArray[0].category_id].name}</h1>
            <div className='splashCategoryGrid'>
              { projectArray.map(project => (
              <ClickProject key={project.id} project={project} user={userItems[project.user_id]} category={categoryItems[project.category_id]}/>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

//made to take in an array of three images
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