import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserLoginContainer } from '../containers';
import { UserRegistrationContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path = "/" component = {UserLoginContainer}/>
      <Route exact path="/signup" component={UserRegistrationContainer} /> 
    </Switch>
  );
};

export default RoutesView;
