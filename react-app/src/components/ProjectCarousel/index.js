import React, { useEffect } from 'react'
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import { getCategory } from '../../store/category';
import { useDispatch, useSelector } from 'react-redux'
import './Carousel.css'

function ProjectCarousel () {
  const dispatch = useDispatch()
  
  const categoryItems = useSelector((state) => state.category)
  const categories = Object.values(categoryItems)
  console.log(categories)

  useEffect(async () => {
    await dispatch(getCategory())
  },[dispatch])

  const CarouselUI = ({ position, total, handleClick }) => (
    <div className='container'>
      <div className='container1'>
        <div className='arrow1' onClick={handleClick} data-position={position - 1}>{'<'}</div>
        <div className='arrow2' right onClick={handleClick} data-position={position + 1}>{'>'}</div>
      </div>
      <span className='dots'>
        {Array(...Array(total)).map( (val, index) => 
          <span className='dot' key={index} onClick={handleClick} data-position={index} >
            {index === position ? '● ' : '○ '}
          </span>
          )}
      </span>
    </div>
  )
  const MyCarousel = makeCarousel(CarouselUI)
  return (
    <>
        {categories.map((category) => (
        <MyCarousel>
          <Slide right>
            <img className='category-img' src={category?.imgs[0]} />
            <div>
              <h1 className='category-title'>{category?.titles[0]}</h1>
            </div>
            <p className='category-description'>
              {category?.description}
            </p>
          </Slide>
          <Slide right>
            <img className='category-img' src={category?.imgs[1]} />
            <div>
              <h1 className='category-title'>{category?.titles[1]}</h1>
            </div>
            <p className='category-description'>
              {category?.description}
            </p>
          </Slide>
          <Slide right>
            <img className='category-img' src={category?.imgs[2]} />
            <div>
              <h1 className='category-title'>{category?.titles[2]}</h1>
            </div>
            <p className='category-description'>
              {category?.description}
            </p>
          </Slide>
        </MyCarousel>
        ))}
    </>
  )
}

export default ProjectCarousel