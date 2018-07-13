import React, { Component } from 'react';
import {loginUser} from '../../apiCalls';
import { toggleUserLogin } from '../../Actions';
import {connect} from 'react-redux';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event)=>{
    event.preventDefault();
    const user = await loginUser(this.state); 
    if (user.status === 'success'){
      await this.props.handleLogin(user.data); //fetch call
    } else {
      console.log('unhappy');  
      this.handleError();  
    }
    //this.props.handleLogin(allUsers.data)
    //dispatch to props allUsers.data
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


export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus
});

export const mapDispatchToProps = (dispatch)=>({
  handleLogin: (userData)=>dispatch(toggleUserLogin(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);