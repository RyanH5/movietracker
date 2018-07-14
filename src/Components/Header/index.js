import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const Header = (props) => {
  console.log(props.loginStatus);
  return (
    <div className="header-section">
      <h1 className="App-title">Movie Tracker</h1>
      {
        !props.loginStatus ?
          <NavLink to="/login" className="nav">Login/SignUp</NavLink> :
          <NavLink to="/" className="nav logout">Log Out</NavLink>
      }
    </div>
  );
};

export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});



export default withRouter(connect(mapStateToProps)(Header));