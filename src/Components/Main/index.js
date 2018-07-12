import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from '../../Containers/Login';
import CardContainer from '../../Containers/CardContainer';

const Main = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={CardContainer} 
      />
      <Route
        exact path="/login"
        component={Login} 
      />
    </Switch>
  )
}

export default withRouter(Main);

