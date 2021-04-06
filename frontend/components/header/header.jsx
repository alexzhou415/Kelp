import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({currentUser,logout}) => {
  const sessionLinks = () => (
    
    <nav className = "login-signup">
      <Link to='/login'><button>Log In</button></Link>
      <Link to='/signup'><button>Sign Up</button></Link>
    </nav>
  );

  const logoutLink = () => (
    
    <nav className="logout-bar">
      <button className='logout-button' onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? logoutLink() : sessionLinks();
};

export default Header;