import React, { Component } from 'react';
import { loginUser } from '../../apiCalls';
import { userSignup, toggleUserLogin, userIsFalse } from '../../Actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isLoading: false,
      hasErrored: false,
      pathAddition: 'new'
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event)=>{
    event.preventDefault();
    this.setState({isLoading: true});
    let user = await loginUser(this.state); 
    if (!user){
      this.setState({hasErrored: true, isLoading: false});
      this.props.userIsFalse(user);
    } else {
      this.setState({ isLoading: false });
      user = { ...user, 
        id: user.id, 
        name: this.state.name, 
        favorites: [], 
        loginStatus: true };
      this.props.userSignup(user); 
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="sign-up-form"
      >
        {
          this.state.hasErrored && 
        <h2>Email has already been used.</h2>
        }
        <h2>SIGNUP</h2>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Name"
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="email"
          value={this.state.email}
          name="email"
        />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="password"
          value={this.state.password}
          name="password"   
        />
        <button
          className="sign-up"
        >Sign Up</button>
      </form>
    );
  }
}

Signup.propTypes = {
  toggleUserLogin: PropTypes.func,
  userIsFalse: PropTypes.func,
  userSignup: PropTypes.func
};

export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});

export const mapDispatchToProps = (dispatch)=>({
  toggleUserLogin: (user)=>dispatch(toggleUserLogin(user)),
  userIsFalse: (user)=>dispatch(userIsFalse(user)),
  userSignup: (user)=>dispatch(userSignup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);