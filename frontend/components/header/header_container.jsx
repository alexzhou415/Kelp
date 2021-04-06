import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions';
import Header from './header';

const mapSTP = (state) =>({
  currentUser: state.entities.users[state.session.id]
});

const mapDTP = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapSTP,mapDTP)(Header);