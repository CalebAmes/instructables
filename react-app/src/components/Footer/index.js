import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import circuits from '../../images/circuits.png'
// import workshop from '../../images/workshop.png'
// import cooking from '../../images/cooking.png'
// import craft from '../../images/craft.png'
// import living from '../../images/living.png'
import main from '../../images/mainImg.png'
import './Footer.css'

// const imgObj = {
//   1 : circuits,
//   2 : workshop,
//   3 : craft,
//   4 : cooking,
//   5 : living,
//   6 : outside
// }

const Footer = ({ category }) => {

  return (
    <>
      <div className='footer-container'>
        <div className='inner-cont'>
          <img className='img' src={main} />
          <div className='cat-foot'>
            <span className='cat'>Categories</span>           
            <Link to={'/category/1'} className='category-1'>
              <div className='cat-1'>
                <div className='cat-div'><i class="fas fa-microchip fa-sm"/> circuits</div>
              </div>
            </Link>
            <Link to={'/category/2'} className='category-2'>
              <div className='cat-2'>
                <div className='cat-div'><i class="fas fa-wrench fa-sm"/> workshop</div>
              </div>
            </Link>
            <Link to={ `/category/3` } className='category-3'>
              <div className='cat-3'>                
                <div className='cat-div'><i class="fas fa-cut fa-sm"/> crafts</div>
              </div>
            </Link>
            <Link to={ `/category/4` } className='category-4'>
              <div className='cat-4'>                
                <div className='cat-div'><i class="fas fa-utensils fa-sm"/> cooking</div>
              </div>
            </Link>
            <Link to={ `/category/5` } className='category-5'>
              <div className='cat-5'>                
                <div className='cat-div'><i class="fas fa-home fa-sm"/> living</div>
              </div>
            </Link>
            <Link to={ `/category/6` } className='category-6'>
              <div className='cat-6'>       
                <div className='cat-div'><i class="fas fa-bicycle fa-sm"/> outdoors</div>
              </div>
            </Link>
          </div>
          <div className='about-us'>
            <span className='about'> About Us </span>
            <Link className='who' to='/'>Who We Are</Link>
            <Link className='why' to='/Create'>Why Publish?</Link>
            <Link className='jobs' to='/'>Jobs</Link>
          </div>
          <div className='resources'>
            <span className='resource'>Resources</span>
            <Link className='map' to='/'>Sitemap</Link>
            <Link className='help1' to='/'>Help</Link>
            <Link className='contact' to='/'>Contact</Link>
          </div>
          <div className='find-us'>
            <span className='find'> Find Us </span>
            <Link className='insta' to='/'>
              <i class="fab fa-instagram-square"></i>
            </Link>
            <Link className='pinterest' to='/'>
              <i class="fab fa-pinterest-square"></i>
            </Link>
            <Link className='face' to='/'>
              <i class="fab fa-facebook-square"></i>
            </Link>
            <Link className='twitter' to='/'>
              <i class="fab fa-twitter-square"></i>
            </Link>
          </div>
          </div>
          <span className='break'>
            <hr />
          </span>
          <div className='footer-bottom'>
            <div className='terms'> Terms of Service</div>
            <span className='divide'>|</span>
            <div className='terms'> Privacy Statement</div>
            <span className='divide'>|</span>
            <div className='terms'> Privacy settings</div>
            <span className='divide'>|</span>
            <div className='terms'> Legal Notices & Trademarks</div>
          </div>
      </div>
    </>
  )
} 

export default Footer