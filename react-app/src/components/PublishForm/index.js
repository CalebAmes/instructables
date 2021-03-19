import React from 'react';
import { NavLink } from 'react-router-dom';

function PublishForm() {
  const handleSubmit = () => {
    return 0;
  }
  return (
    <div className="publish-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text">
          Test Input
        </input>
      </form>
    </div>
  )
}

export default PublishForm;
