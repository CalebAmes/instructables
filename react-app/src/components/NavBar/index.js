import React,{ useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as DdIcon } from '../../icons/robot.svg';
import { getProjects } from '../../store/project';
import { getCategory } from '../../store/category';
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
          {/* <NavFavorite icon={<i class="fas fa-heart" />} />
          <NavMade icon={<i class="fas fa-hammer" />} />
          <NavComment icon={<i class="fas fa-comments" />} /> */}
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

export function Dropdown({setAuthenticated}) {
  const dispatch = useDispatch();
  const projectItems = useSelector((state) => state?.project);
  const userItems = useSelector((state) => state?.single)

  const user = userItems?.user
  const [ activeMenu, setActiveMenu ] = useState('main');
  const [ menuHeight, setMenuHeight ] = useState(null);

  const projectArray = Object.values(projectItems);
  
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
        className='dropdown-item item' 
        onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}
        >
            { props.children }
            <div>
              <span className='rightIcon'>{ props.rightIcon }</span>
              <span className='rightRightIcon'>{ props.rightRightIcon }</span>
            </div>
      </a>
    );
  }

  function DropdownCategory({ category }) {
    return (
      <Link to={`/category/${ category.id }`} className='menu-item item'>
        <div className='icon-button'></div>
        {category.name}
      </Link>
    )
  }

  function DropdownProject({ project }) {
    return (
      <div className='menu-item item'>
      <Link to={`/project/${ project.id }`}>
        <div className='icon-button'></div>
        { project.title }
      </Link>
      </div>
    )
  }

  return (
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
            <Link to={'/category/1'} className='cGridItem cat1'>
              <div className='gridDiv'>
                <i class="fas fa-microchip fa-sm"/>
                <div>circuits</div>
              </div>
            </Link>
            <Link to={ `/category/2` } className='cGridItem cat2'>
              <div className='gridDiv'>
                <i class="fas fa-wrench fa-sm"/>
                <div>workshop</div>
              </div>
            </Link>
            <Link to={ `/category/3` } className='cGridItem cat3'>
              <div className='gridDiv'>
                <i class="fas fa-cut fa-sm"/>
                <div>crafts</div>
              </div>
            </Link>
            <Link to={ `/category/4` } className='cGridItem cat4'>
              <div className='gridDiv'>
                <i class="fas fa-utensils fa-sm"/>
                <div>cooking</div>
              </div>
            </Link>
            <Link to={ `/category/5` } className='cGridItem cat5'>
              <div className='gridDiv'>
                <i class="fas fa-home fa-sm"/>
                <div>living</div>
              </div>
            </Link>
            <Link to={ `/category/6` } className='cGridItem cat6'>
              <div className='gridDiv'>
                <i class="fas fa-bicycle fa-sm"/>
                <div>outdoors</div>
              </div>
            </Link>
          </div>
          <div className='profileGrid'>
            <Link to={`/profile/${user?.id}`} 
              className='pGridItem profile' 
              id='profile'>
                Profile
            </Link>
            <Link to='/' 
              className='pGridItem logout' 
              onClick={ logoutUser }>
                Logout
            </Link>
          </div>
          <Link to='/' className='menu-item item'>
            Home
          </Link>
          <Link to='/login' className='menu-item item'>
            Login
          </Link>
          <Link to='/sign-up' className='menu-item item'>
            Sign Up
          </Link>
          <Link to='/users' className='menu-item item'>
            Users
          </Link>
          <Link to='/create' className='menu-item item'>
            Publish
          </Link>
          <Link to='/projects' className='menu-item item'>
            Projects
          </Link>
          <DropdownItem 
            rightRightIcon={<i class="fas fa-chevron-right"/>} goToMenu='categories'>
              Categories
          </DropdownItem>
        </ul>
      </CSSTransition>

      <CSSTransition 
        in={ activeMenu === 'categories' } 
        unmountOnExit
        timeout={ 500 }
        classNames='menu-secondary'
        >
        <ul className='dd'>
          <DropdownItem 
            rightRightIcon={<i class="fas fa-chevron-left"/>} 
            goToMenu='main'>
              ...back
          </DropdownItem>
          <DropdownItem 
            rightRightIcon={<i class="fas fa-chevron-right"/>}
            goToMenu='projects'>
              Projects
            </DropdownItem>
            <Link to={ `/category/1` } 
              className='cat-menu cat-menu menu-item item cat1-2'>
              <i class="fas fa-microchip"/>
              <div>Circuits</div>
            </Link>
            <Link to={ `/category/2` } 
              className='cat-menu menu-item item cat2-2'>
              <i class="fas fa-wrench"/>
              Workshop
            </Link>
            <Link to={ `/category/3` } 
              className= 'cat-menu menu-item item cat3-2'>
              <i class="fas fa-cut"/>
              Craft
            </Link>
            <Link to={ `/category/4` } 
              className='cat-menu menu-item item cat4-2'>
              <i class="fas fa-utensils"/>
              Cooking
            </Link>
            <Link to={ `/category/5` } 
              className= 'cat-menu menu-item item cat5-2'>
            <i class="fas fa-home"/>
            Living
            </Link>
            <Link to={ `/category/6` } 
              className='cat-menu menu-item item cat6-2'>
            <i class="fas fa-bicycle"/>
            Outside
            </Link>
        </ul>

      </CSSTransition>
      <CSSTransition 
        in={ activeMenu === 'projects' } 
        unmountOnExit
        timeout={ 500 }
        classNames='menu-secondary'
        >
        <ul className='dd'>
          <DropdownItem 
            rightRightIcon={<i class="fas fa-chevron-left"/>}
            goToMenu='categories'>
              ...back
          </DropdownItem>
          <DropdownItem 
            rightIcon={<i class="fas fa-chevron-left"/>}
            rightRightIcon={<i class="fas fa-chevron-left"/>}
            goToMenu='main'>
              ....main
          </DropdownItem>
          {
            projectArray.map(item => (
              <DropdownProject project={ item } key={ item.id }> { item.name }</DropdownProject>
            ))
          }
        </ul>
      </CSSTransition>
    </div>
  )
}

export default NavBar;
