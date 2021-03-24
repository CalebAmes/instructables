import React,{ useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as DdIcon } from '../../icons/robot.svg';
import { getProjects } from '../../store/project';
import { getCategory } from '../../store/category';
import { getComment } from '../../store/comment';
import { getUsers } from '../../store/user';
import LogoutButton from '../auth/LogoutButton';
import '../../index.css';
import './NavBar.css';

const NavBar = ({ setAuthenticated }, props) => {
  
  return (
    <>
      <nav className='NavBar'>
        <div className='NavBar-div'>
          <div className='far-els'>
          <NavFavorite icon={<i class="fas fa-heart" />} />
          <NavMade icon={<i class="fas fa-hammer" />} />
          <NavComment icon={<i class="fas fa-comments" />} />
          </div>
        </div>
      </nav>
          <div className='navItem'>
            <NavItem icon={<DdIcon />}>
              <Dropdown setAuthenticated={setAuthenticated} />
            </NavItem>
          </div>
      <div className='pad'/>
    </>
  )
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);
  
  
  useEffect(() => {
    getCategory();
    getProjects();
    getUsers();
  }, [])
  
  
  const openFunc = () => {
    setOpen(!open);
  }

  return (
    <div className='nav-item'>
      <a href='#' className='icon-button' onClick={openFunc}>
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

export function ProjectsMenu(props) {

}

export function Dropdown({setAuthenticated}) {
  const dispatch = useDispatch();
  const categoryItems = useSelector((state) => state.category);
  const projectItems = useSelector((state) => state.project);
  const userItems = useSelector((state) => state.user);
  
  const [ activeMenu, setActiveMenu ] = useState('main');
  const [ menuHeight, setMenuHeight ] = useState(null);

  const categoryArray = Object.values(categoryItems);
  const projectArray = Object.values(projectItems);
  const userArray = Object.values(userItems);
  
  useEffect(() => {
    dispatch(getProjects());
    dispatch(getCategory());
  }, [dispatch])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href='#' 
        className='menu-item' 
        onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className='icon-button'>{ props.icon }</span>
          { props.children }
        </a>
    );
  }

  function DropdownCategory({ category }) {
    return (
      <Link to={`/category/${category.id}`} className='menu-item'>
        <div className='icon-button'></div>
        {category.name}
      </Link>
    )
  }

  function DropdownProject({ project }) {
    return (
      <Link to={`/project/${project.id}`} className='menu-item'>
        <div className='icon-button'></div>
        {project.name}
      </Link>)
  }

  return (
    <>
    <div className='dropdown' style={{ height: menuHeight }}>

      <CSSTransition 
        in={ activeMenu === 'main' } 
        unmountOnExit
        timeout={ 500 }
        classNames='menu-primary'
        onEnter={ calcHeight }
        >
        <ul className='dd'>
          <div className='categoryGrid'>
            <div className='cGridItem'>
              <i class="fas fa-microchip"/>
            </div>
            <div className='cGridItem'>
              <i class="fas fa-wrench"/>
            </div>
            <div className='cGridItem'>
              <i class="fas fa-cut"/>
            </div>
            <div className='cGridItem'>
              <i class="fas fa-utensils"></i>
            </div>
            <div className='cGridItem'>
            <i class="fas fa-home"></i>
            </div>
            <div className='cGridItem'>
            <i class="fas fa-bicycle"></i>
            </div>
          </div>
          <div className='profileGrid'>
            <div className='pGridItem'>Profile</div>
            <div className='pGridItem'>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </div>
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
          <DropdownItem goToMenu='categories'>Categories</DropdownItem>
          </li>
        </ul>

      </CSSTransition>

      <CSSTransition 
        in={ activeMenu === 'categories' } 
        unmountOnExit
        timeout={ 500 }
        classNames='menu-secondary'
        >
          
        <ul className='dd'>
          <li>
          <DropdownItem goToMenu='main'>main</DropdownItem>
          </li>
          <li>
          <DropdownItem goToMenu='projects'>projects</DropdownItem>
          </li>
          {
            categoryArray.map(item => (
              <DropdownCategory category={ item } key={ item.id }> 
              { item.name }
              </DropdownCategory>
            ))
          }
        </ul>

      </CSSTransition>
      <CSSTransition 
        in={ activeMenu === 'projects' } 
        unmountOnExit
        timeout={ 500 }
        classNames='menu-secondary'
        >
          
        <ul className='dd'>
          <li>
          <DropdownItem goToMenu='categories'>categories</DropdownItem>
          </li>
          <li>
          <DropdownItem goToMenu='main'>main</DropdownItem>
          </li>
          {
            projectArray.map(item => (
              <DropdownProject project={ item } key={ item.id }> { item.name }</DropdownProject>
            ))
          }
        </ul>

      </CSSTransition>
    </div>
    </>
  )
}

export default NavBar;
