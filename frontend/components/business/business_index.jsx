import React from 'react';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
  
  componentDidMount (){
    this.props.fetchBusinesses();
  }

  render(){
      
    const businesses = Object.values(this.props.businesses).map((business) => (
      <li className="business-index-item" key={business.id}>
        <BusinessIndexItem  business={business} />
      </li>
    ));
    
    return (
      <div className="business-index">
        <ul className="business-index-list">
          {businesses}
        </ul>
      </div>
    );
  }
}

export default BusinessIndex;