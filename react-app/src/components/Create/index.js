import React from 'react';
import { NavLink } from 'react-router-dom';

function Create() {
  return (
    <>
      <h1>Create your new instructable!!</h1>
      <NavLink to="/editInstructable/new" exact={true} activeClassName="active">
        New Instructable
      </NavLink>
    </>
  )
}

export default Create;
