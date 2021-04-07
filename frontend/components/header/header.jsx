import React from 'react';
import {Link} from 'react-router-dom';


const Header = ({currentUser,logout}) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <ul className="login-button-list">
        <li>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </li>
        <li>
          <Link to="/demo">
            <button>Demo Log In</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );

  const logoutLink = () => (
    
    <nav className="logout-bar">
      {currentUser.username}
      <button className='logout-button' onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? logoutLink() : sessionLinks();
};

export default Header;