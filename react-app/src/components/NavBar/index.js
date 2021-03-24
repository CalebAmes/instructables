import React,{ useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as DdIcon } from '../../icons/robot.svg'
import LogoutButton from '../auth/LogoutButton';
import '../../index.css'
import './NavBar.css'

const NavBar = ({ setAuthenticated }, props) => {
  
  return (
    <>
      <nav className='NavBar'>
          <div>
            <NavItem icon={<DdIcon />}>
              <Dropdown setAuthenticated={setAuthenticated} />
            </NavItem>
          </div>
          <div className='NavBar-div'>
          <div className='far-els'>
          <NavFavorite icon={<i class="fas fa-heart" />} />
          <NavMade icon={<i class="fas fa-hammer" />} />
          <NavComment icon={<i class="fas fa-comments" />} />
          </div>
        </div>
      </nav>
      <div className='pad'/>
    </>
  )
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='nav-item'>
      <a href='#' className='icon-button' onClick={()=> setOpen(!open)}>
        { props.icon }
      </a>

      {open && props.children}
    </div>
  )
}


export function NavFavorite(props) {
  return (
    <div className='nav-fav nav-div'>
      {props.icon} favorite.
    </div>
  ) 
}

export function NavMade(props) {
  return (
    <div className='nav-made nav-div'>
      {props.icon} i made it.
    </div>
  ) 
}

export function NavComment(props) {
  return (
    <div className='nav-comment nav-div'>
      <div>{props.icon}</div>
    </div>
  )
}

export function Dropdown({setAuthenticated}) {
  return (
    <ul className='dd'>
      <li>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </li>
      <li>
      <NavLink to='/login' exact={true} activeClassName='active'>
        Login
      </NavLink>
      </li>
      <li>
      <NavLink to='/sign-up' exact={true} activeClassName='active'>
        Sign Up
      </NavLink>
      </li>
      <li>
      <NavLink to='/users' exact={true} activeClassName='active'>
        Users
      </NavLink>
      </li>
      <li>
      <NavLink to='/create' exact={true} activeClassName='active'>
        Publish
      </NavLink>
      </li>
      <li>
      <NavLink to='/projects' exact={true} activeClassName='active'>
        Projects
      </NavLink>
      </li>
      <li>
      <LogoutButton setAuthenticated={setAuthenticated} />
      </li>
    </ul>
  )
}

export default NavBar;
