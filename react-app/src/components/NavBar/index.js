import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';

const NavBar = ({ setAuthenticated }, props) => {
  
  return (
    <>
      
    </>
  )
}

function Dropdown() {
  const history = useHistory();
  const dispatch = useDispatch();
  const usersItems = useSelector(state => state.users)
  const 
}
// const NavBar = ({ setAuthenticated }) => {
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
