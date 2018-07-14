import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Login from '../../Containers/Login';
import CardContainer from '../../Containers/CardContainer';
import FormHolder from '../FormHolder';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Main = ({loginStatus}) => {

  return (
    <Switch>
      <Route
        exact path="/"
        component={CardContainer}
      />
      <Route
        exact path="/login"
        render={() => (
          loginStatus ? (
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


export const mapStateToProps = ({loginStatus}) => ({
  loginStatus
});

export default withRouter(connect(mapStateToProps)(Main));


