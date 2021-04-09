import {connect} from 'react-redux';
import BusinessIndex from './business_index';
import {fetchBusinesses} from '../../actions/business_actions';

const mapSTP = (state) => ({
  businesses: state.entities.businesses
})

const mapDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(mapSTP,mapDTP)(BusinessIndex);