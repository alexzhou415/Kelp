import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from "./session_form/login_form_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="logo-link">
        <button>Kelp</button>
      </Link>
    </header>
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer}/>
      <Route exact path="/login" component={LoginFormContainer}/>
    </Switch>
  </div>
);

export default App;