import React from 'react';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
  
  componentDidMount (){
    this.props.fetchBusinesses;
  }

  render(){


  }
}

export default BusinessIndex;