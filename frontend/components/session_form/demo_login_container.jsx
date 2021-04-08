import React from "react";
// import SessionForm from "./session_form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/session_actions";

const DemoLogin = ({submitForm}) => {
  submitForm();
  return null;
}

const mapSTP = (state) => ({
  errors: state.errors.session,
  formType: "Demo",
  link: <Link to="/signup">Sign Up</Link>,
  user: {email: 'demo@email.com', password: '12345678'}
});

const mapDTP = (dispatch) => ({
  submitForm: () => dispatch(login({email: 'demo@email.com', password: '12345678'})),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapSTP, mapDTP)(DemoLogin);
