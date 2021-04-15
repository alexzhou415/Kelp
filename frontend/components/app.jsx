import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from "./session_form/login_form_container";
import BusinessShowContainer from "./business/business_show_container";
import CreateReviewFormContainer from "./review/create_review_form_container";
import UpdateReviewFormContainer from "./review/update_review_form_container";
import FrontPage from './frontpage/frontpage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import DemoLoginContainer from './session_form/demo_login_container';
import NotFound from './not_found';


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/demo" component={DemoLoginContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer}/>
      <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={CreateReviewFormContainer}/>
      <ProtectedRoute exact path="/businesses/:businessId/reviews/:reviewId" component={UpdateReviewFormContainer}/>
      <Route exact path="/" component={FrontPage} />
      <Route path="/404" component={NotFound}/>
      <Redirect to ="/404"/>
    </Switch>
  </div>
);

export default App;