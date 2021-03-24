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
              <Dropdown />
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
      <NavLink to='/signup' exact={true} activeClassName='active'>
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


// function Dropdown() {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const projectItems = useSelector((state) => state.project);
//   const categoryItems = useSelector((state) => state.category);
//   const commentItems = useSelector((state) => state.comment);
//   const userItems = useSelector((state) => state.user);

//   const projectArray = Object.values(projectItems);
//   const categoryArray = Object.values(categoryItems);
//   const commentArray = Object.values(commentItems);
//   const usersArray = Object.values(userItems);

//   const [ activeMenu, setActiveMenu ] = useState('main');
//   const [ menuHeight, setMenuHeight ] = useState(null);

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height);
//   }

//   function DdToMenu(props) {
//     return (
//       <a href='#' className='menu-item' onClick={()=>{
//         props.goToMenu && setActiveMenu(props.goToMenu)
//       }}>
//         <div className='icon-button'>{ props.leftIcon }</div>
//         { props.children }
//       </a>
//     )
//   }

//   function DdCategory({ category }) {
//     return (
//       <Link to={`/category/${category.id}`} className='menu-item'>
//         <div className='icon-button'></div>
//         { category.name }
//       </Link>
//     )
//   }

//   return (
//     <div className='dropdown' style={{ height: menuHeight }}>
//       <CSSTransition
//         in={activeMenu === 'main'}
//         unmountOnExit
//         timeout={500}
//         classNames='menu-primary'
//         onEnter={ calcHeight }
//       >
//         <div className='menu'>
//           <DdToMenu leftIcon={<i class='far fa-calendar-alt'/>}
//             goToMenu='categories'>Projects</DdToMenu> 
//         </div>
//       </CSSTransition>
//     </div>
//   )}



















// const Dropdown = ({ setAuthenticated }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/" exact={true} activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" exact={true} activeClassName="active">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/sign-up" exact={true} activeClassName="active">
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/users" exact={true} activeClassName="active">
//             Users
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/create" exact={true} activeClassName="active">
//             Publish
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/projects" exact={true} activeClassName="active">
//             Projects
//           </NavLink>
//         </li>
//         <li>
//           <LogoutButton setAuthenticated={setAuthenticated} />
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default NavBar;
