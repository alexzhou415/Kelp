import React from 'react';
import SessionForm from './session_form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login, clearErrors} from '../../actions/session_actions';

const mapSTP = (state) => ({
  errors: state.errors.session,
  formType: 'Log In',
  link: <Link to="/signup">Sign Up</Link>
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP,mapDTP)(SessionForm);