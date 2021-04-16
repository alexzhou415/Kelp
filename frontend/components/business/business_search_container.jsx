import {connect} from 'react-redux';
import BusinessSearchPage from './business_search';
import {fetchBusinesses} from '../../actions/business_actions';
 
const mapSTP = (state) => ({
  businesses: state.entities.businesses,
});

const mapDTP = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
})

export default connect(mapSTP, mapDTP)(BusinessSearchPage);