import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogout } from '../../Actions';
import './styles.css';

const Header = (props) => {
  return (
    <div className="header-section">
      <h1 className="App-title">Movie Tracker</h1>
      {
        props.loginStatus ?
          <div className="logged-in-nav">
            <NavLink
              to="/"
              className="nav home">
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className="nav favorites">
              Favorites
            </NavLink>
            <NavLink
              onClick={() => props.userLogout(props.user)}
              to="/"
              className="nav logout">
              Log Out
            </NavLink>
          </div>
          :
          <div className="logged-out-nav">
            <NavLink
              to="/"
              className="nav home">
              Home
            </NavLink>
            <NavLink
              to="/login"
              className="nav">
              Login<br></br>SignUp
            </NavLink>
          </div>
      }
    </div>
  );
};

export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  userLogout: (user) => dispatch(userLogout(user))
});

Header.propTypes = {
  loginStatus: PropTypes.bool,
  userLogout: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));