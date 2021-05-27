import {connect} from 'react-redux'
import {logout,login} from '../../actions/session_actions';
import Header from './header';

const mapSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
  // currentUser: state.session.id,
});

const mapDTP = (dispatch) => ({
  submitForm: () => dispatch(login({email: 'demo@email.com', password: '12345678'})),
  logout: () => dispatch(logout())
})

export default connect(mapSTP,mapDTP)(Header);