import React from 'react';
import {Link} from 'react-router-dom'

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