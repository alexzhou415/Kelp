import React from 'react';
import HeaderContainer from '../header/header_container';
import BusinessIndexContainer from '../business/business_index_container';
import {Link} from 'react-router-dom';
import Search from '../search/search';
import logo from "../../../app/assets/images/logo_transparent.png";
// import splash from "../../../app/assets/images/krabby_patties.png";
import splash from "../../../app/assets/images/krabby_patties.png";
class FrontPage extends React.Component {


  render(){
    return (
      <div className="splash-container">
        <div className="header-box">
          <HeaderContainer />
        </div>
        <div className="splash-logo-container">
          <Link to="/" className="splash-logo-link">
            <img className="splash-logo" src={logo} alt="" />
          </Link>
          <div className="splash-image-container">
            <img
              className="splash-image"
              // src="https://kelp-seeds.s3-us-west-1.amazonaws.com/krabby_patties.png"
              src="https://i.imgur.com/i7qqwRp.png"
              alt=""
            />
          </div>
          <Search />
        </div>
        <div className="link-labels">
          <div className="label"><a href="https://www.linkedin.com/in/alex-zhou-ba3614148/"><i className="fab fa-linkedin fa-3x"></i></a></div>
          <div className="label"><a href="https://github.com/alexzhou415"><i className="fab fa-github-square fa-3x"></i></a></div>
          <div className="label"><a href="https://alexzhou415.github.io/Portfolio/"><i className="fas fa-folder-open fa-3x"></i></a></div>
        </div>
        <div className="frontpage-business-index">
          <BusinessIndexContainer type="frontpage" />
        </div>
      </div>
    );
  }
}

export default FrontPage;