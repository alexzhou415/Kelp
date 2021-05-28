import React from 'react';
import pat from '../../app/assets/images/404.png';
const NotFound = () =>{
  return (
    <div className="not-found-container">
      <h3 className="not-found-header">
        404 error. Shiver me timbers! The page you're looking for cannot be
        found.
      </h3>
      <img src="https://i.imgur.com/kulaKPG.png" alt="" />
    </div>
  );
}

export default NotFound;