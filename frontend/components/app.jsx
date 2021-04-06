import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from "./session_form/login_form_container";
import HeaderContainer from './header/header_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="logo-link">
        <button>Kelp</button>
      </Link>
      {/* <HeaderContainer/> */}
    </header>
    <Switch>
      <Route exact path='/' component={HeaderContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
    </Switch>
  </div>
);

export default App;