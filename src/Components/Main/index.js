import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Login from '../../Containers/Login';
import CardContainer from '../../Containers/CardContainer';
import {connect} from 'react-redux';

const Main = ({state}) => {

  return (
    <Switch>

      <Route
        exact path="/"
        component={CardContainer}
      />
      <Route
        exact path="/login"
        component={Login}
        render={() => (
          state.user.loginStatus ? (
            <Redirect to="/" />
          ) : (
            <Login />
          )
        )}
      />
    </Switch>
  );
};

export const mapStateToProps = (state) => ({
  state: state
});

export default withRouter(connect(mapStateToProps)(Main));


