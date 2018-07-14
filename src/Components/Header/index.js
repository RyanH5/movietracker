import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const Header = ({loginStatus}) => {
  return (
    <div className="header-section">
      <h1 className="App-title">Movie Tracker</h1>
      {
        !loginStatus ?
          <NavLink to="/login" className="nav">Login/SignUp</NavLink> :
          <NavLink to="/" className="nav logout">Log Out</NavLink>
      }
    </div>
  );
};


export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});

Header.propTypes = {
  loginStatus: PropTypes.bool
};



export default withRouter(connect(mapStateToProps)(Header));