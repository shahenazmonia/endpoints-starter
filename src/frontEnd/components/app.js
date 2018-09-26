import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Signup from './containers/signup';
import Login from './containers/login';
const publicPath = '/';

export const routeCodes = {
  SINGUP: `${publicPath}signup`,
  LOGIN: `${publicPath}login`
};

const App = () => {

  return(
    <HashRouter>
      <Switch>
        <Route exact path={publicPath} component={Login}/>
        <Route exact path={routeCodes.SINGUP} component={Signup}/>
        <Route exact path={routeCodes.LOGIN} component={Login}/>
        <Redirect to ='/' />
      </Switch>
    </HashRouter>
  );
};

module.exports = App;
