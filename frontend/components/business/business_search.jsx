import React from 'react';
import BusinessIndexItem from './business_index_item';
import {Link} from 'react-router-dom';
import logo from "../../../app/assets/images/logo_transparent.png";
import HeaderContainer from '../header/header_container';
import Search from '../search/search';
class BusinessSearchPage extends React.Component {

  componentDidMount(){
    this.props.fetchBusinesses();
    window.scrollTo(0, 0);
  }

  render(){
    if (!Object.keys(this.props.businesses).length) return null;
    const search = this.props.location.search;
    const businesses = Object.values(this.props.businesses);
    let words = search.slice(1,search.length).split("%");
    const businessesArray = [];
    words.forEach(word => {
      businesses.forEach(biz => {
        const category = biz.category.toLowerCase();
        const name = biz.name.toLowerCase();
        const lowerWord = word.toLowerCase();
        if ((category.includes(lowerWord) || name.includes(lowerWord)) && !businessesArray.includes(biz)) {
          businessesArray.push(biz);
        }
      });
    });
    let index = businessesArray.map((business, i) => {
      return(
            <li key={business.id}>
              <div className="index-number">{i+1}.</div>
              <BusinessIndexItem business={business} />
            </li>
            )
      });
      let message = <div className="hot-businesses">All Results</div>;
      if (index.length < 1) {
        message = <div className="hot-businesses no-results">No results for {search.slice(1,search.length).split("%").join(" ")}</div>
      }
    return (
      <div className="search-business-page">
        <div className="show-page-top-header">
          <div className="show-page-logo-container">
            <Link to="/" className="show-page-logo-link">
              <img className="login-logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="show-page-search">
            <Search/>
          </div>
          <div className="non-frontpage-login">
            <HeaderContainer />
          </div>
        </div>
        <div className="search-index-container">
          <div className="business-index">
            {message}
            <ul className="business-index-list">{index}</ul>
          </div>
        </div>
      </div>
    );
  }
  
}

export default BusinessSearchPage;