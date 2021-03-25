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
import { logout } from '../../services/auth'
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
      <a href='#' className={ open && 'icon-button-flip' } onClick={openFunc}>
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

  const logoutUser = async (e) => {
    logout();
    setAuthenticated(false);
  };

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
        {project.title}
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
            <div className='cGridItem cat1'>
              <div className='gridDiv'>
                <i class="fas fa-microchip fa-sm"/>
                <div>circuits</div>
              </div>
            </div>
            <div className='cGridItem cat2'>
              <div className='gridDiv'>
                <i class="fas fa-wrench fa-sm"/>
                <div>workshop</div>
              </div>
            </div>
            <div className='cGridItem cat3'>
              <div className='gridDiv'>
                <i class="fas fa-cut fa-sm"/>
                <div>crafts</div>
              </div>
            </div>
            <div className='cGridItem cat4'>
              <div className='gridDiv'>
                <i class="fas fa-utensils fa-sm"/>
                <div>cooking</div>
              </div>
            </div>
            <div className='cGridItem cat5'>
              <div className='gridDiv'>
                <i class="fas fa-home fa-sm"/>
                <div>living</div>
              </div>
            </div>
            <div className='cGridItem cat6'>
              <div className='gridDiv'>
                <i class="fas fa-bicycle fa-sm"/>
                <div>outdoors</div>
              </div>
            </div>
          </div>
          <div className='profileGrid'>
            <div className='pGridItem' id='profile'>Profile</div>
            <div className='pGridItem' onClick={ logoutUser }>
              Logout
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
          <DropdownItem icon={<i class="fas fa-arrow-left"></i>} goToMenu='main'>main</DropdownItem>
          </li>
          <li>
          <DropdownItem goToMenu='projects'>projects</DropdownItem>
          </li>
          <div className=''>
            <div className='menu-item cat1-2'>
              <i class="fas fa-microchip"/>
              <div>Circuits</div>
            </div>
            <div className='menu-item cat2-2'>
              <i class="fas fa-wrench"/>
              Workshop
            </div>
            <div className= 'menu-item cat3-2'>
              <i class="fas fa-cut"/>
              Craft
            </div>
            <div className='menu-item cat4-2'>
              <i class="fas fa-utensils"/>
              Cooking
            </div>
            <div className= 'menu-item cat5-2'>
            <i class="fas fa-home"/>
            Living
            </div>
            <div className='menu-item cat6-2'>
            <i class="fas fa-bicycle"/>
            Outside
            </div>
          </div>
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
