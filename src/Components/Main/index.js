import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import CardContainer from '../../Containers/CardContainer';
import FavoritesContainer from '../../Containers/FavoritesContainer';
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
        exact path="/favorites"
        component={FavoritesContainer}
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
    </Switch>
  );
};

Main.propTypes = {
  state: PropTypes.object,
  loginStatus: PropTypes.bool
};

export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});

export default withRouter(connect(mapStateToProps)(Main));


