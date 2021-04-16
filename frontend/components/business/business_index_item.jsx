import React from 'react';
import * as stars from "./business_rating_stars";
import { Link } from "react-router-dom";


const BusinessIndexItem = (props) => {
  // if (props.business.name=== 'Krabby Patties') return null;
  const starBar = () => {
    if (props.business.reviewIds) {
      return <img src={stars.IndexStar(props.business.averageRating)} alt="" />;
    }
    return <img src={stars.IndexStar(0)} alt="" />;
  };

  return (
    <Link
      to={{
        pathname: `businesses/${props.business.id}`,
      }}
      className="business-index-link"
    >
      <div className="business-index-item">
        <div className="business_index_image_container">
          <img
            className="business-item-image"
            src={props.business.photoUrls[0]}
            alt=""
          />
        </div>
        <div className="business-index-item-info">
          <div className="business-item-name">{props.business.name}</div>
          <div className="business-item-address-container">
            <div className="business-item-address">
              {props.business.address}
            </div>
          </div>
          <div className="business-item-rating">
            {starBar()}
          </div>
          <div className="business-item-cat">{props.business.category}</div>
          <div className="bikini">Bikini Bottom</div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessIndexItem