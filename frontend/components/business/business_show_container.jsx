import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';



const mapSTP = (state, {match}) => ({
  business: state.entities.businesses[match.params.businessId]
});

const mapDTP = (dispatch) => ({

});

export default connect(mapSTP)(BusinessShow);