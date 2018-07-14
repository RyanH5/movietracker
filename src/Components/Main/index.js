import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Login from '../../Containers/Login';
import CardContainer from '../../Containers/CardContainer';
import FormHolder from '../FormHolder';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={CardContainer}
      />
      <Route
        exact path="/login"
        render={() => (
          props.loginStatus ? (
            <Redirect to="/" />
          ) : (
            <FormHolder />
          )
        )}
      />
      {/* <Route
        path='/'
        component={PageNotFound}
      /> */}
    </Switch>
  );
};

Main.propTypes = {
  state: PropTypes.object
};


export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});

export default withRouter(connect(mapStateToProps)(Main));


