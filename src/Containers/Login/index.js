import React, { Component } from 'react';
import {loginUser} from '../../apiCalls';
import { toggleUserLogin, userIsFalse } from '../../Actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      hasErrored: false

    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event)=>{
    event.preventDefault();
    this.setState({isLoading: true});
    const user = await loginUser(this.state); 
    if (!user){
      this.setState({hasErrored: true, isLoading: false});
      this.props.userIsFalse(user);
    } else {
      this.setState({ isLoading: false });
      this.props.handleLogin(user); 
    }
    
    //same action for login and create new user
  }

  handleError = ()=>{
    return (
      <h1>Your email or password does not match.</h1>
    );    
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
      
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
        <button>Submit</button>
      </form>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  userIsFalse: PropTypes.func.isRequired
}

export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});

export const mapDispatchToProps = (dispatch)=>({
  handleLogin: (user)=>dispatch(toggleUserLogin(user)),
  userIsFalse: (user)=>dispatch(userIsFalse(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);