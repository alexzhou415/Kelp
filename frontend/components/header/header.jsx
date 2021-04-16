import React from 'react';
import {Link} from 'react-router-dom';


const Header = ({currentUser,logout,submitForm}) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <ul className="login-button-list">
        <li>
          <Link to="/login">
            <button className="login-button">Log In</button>
          </Link>
        </li>
        <li>
          {/* <Link to="/demo"> */}
            <button className="demo-login" onClick={submitForm}>Demo Log In</button>
          {/* </Link> */}
        </li>
        <li>
          <Link className="signup-link" to="/signup">
            <button>Sign Up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );

  const logoutLink = () => (
    <nav className="logout-bar">
      <div className="header-profile">
        <img src={currentUser.photoUrl} alt=""/>
      </div>
      <div>{currentUser.username}</div>
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    </nav>
  );

  return currentUser ? logoutLink() : sessionLinks();
};

export default Header;