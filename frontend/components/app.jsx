import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from "./session_form/login_form_container";
import HeaderContainer from './header/header_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import DemoLogin from './session_form/demo_login_container';
import NotFound from './not_found';

const App = () => (
  <div>
    <header>
      <Link to="/" className="logo-link">
        <button>Kelp</button>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/demo" component={DemoLogin} />
      <Route exact path="/" component={HeaderContainer} />
      <Route path="/404" component={NotFound}/>
      <Redirect to ="/404"/>
    </Switch>
  </div>
);

export default App;