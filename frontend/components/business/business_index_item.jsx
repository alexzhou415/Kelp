import React from 'react';

const BusinessIndexItem = (props) => {

  return (
    <div>
      <div className="business-item-name">{props.business.name}</div>
      <div className="business-item-rating">{props.business.rating}</div>
      <div className="business-item-cat">{props.business.category}</div>
    </div>
  )
};

export default BusinessIndexItem