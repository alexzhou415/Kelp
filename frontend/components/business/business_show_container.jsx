import React from 'react';
import {connect} from 'react-redux';
import BusinessShow from './business_show';
import {fetchBusiness} from '../../actions/business_actions';


const mapSTP = (state, {match}) => ({
  business: state.entities.businesses[match.params.businessId],
  state
});

const mapDTP = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
});

export default connect(mapSTP, mapDTP)(BusinessShow);