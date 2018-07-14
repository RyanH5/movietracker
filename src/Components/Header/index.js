import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleUserLogin } from '../../Actions';



const Header = (props) => {
  console.log(props.user)
  return (
    <div className="header-section">
      <h1 className="App-title">Movie Tracker</h1>
      {
        props.loginStatus ?
          <NavLink 
          //<Link to={this.props.myroute} onClick={hello}>Here</Link>
            onClick={()=>props.toggleUserLogin(props.user)}
            to="/" 
            className="nav logout">
            Log Out
          </NavLink>
          :
          <NavLink 
            to="/login" 
            className="nav">
            Login/SignUp
          </NavLink> 
          
      }
    </div>
  );
};


export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
  user: state.user
});

export const mapDispatchToProps = (dispatch)=>({
  toggleUserLogin: (user)=>dispatch(toggleUserLogin(user))
});

Header.propTypes = {
  loginStatus: PropTypes.bool
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));