import React from 'react';
import SessionForm from './session_form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signup, clearErrors} from '../../actions/session_actions';

const mapSTP = (state) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  link: <Link to="/login">Log In</Link>
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapSTP,mapDTP)(SessionForm);