import React from 'react';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
  
  componentDidMount (){
    this.props.fetchBusinesses();
  }

  render(){
      
    const businesses = Object.values(this.props.businesses).map((business, i) => (
      <li key={business.id} >
        <BusinessIndexItem business={business}/>
      </li>
    ));
    
    return (
      <div className="business-index">
        <div className="hot-businesses">Cool Businesses in Bikini Bottom</div>
        <ul className="business-index-list">{businesses}</ul>
      </div>
    );
  }
}

export default BusinessIndex;