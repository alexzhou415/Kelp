import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from "./session_form/login_form_container";
import HeaderContainer from './header/header_container';
import FrontPage from './frontpage/frontpage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import DemoLoginContainer from './session_form/demo_login_container';
import NotFound from './not_found';
import Logo from '../../app/assets/images/logo_transparent.png'

const App = () => (
  <div>
    
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/demo" component={DemoLoginContainer} />
      <Route exact path="/" component={FrontPage} />
      <Route path="/404" component={NotFound}/>
      <Redirect to ="/404"/>
    </Switch>
    <p>
      
    </p>
  </div>
);

export default App;