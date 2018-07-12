import React, { Component } from 'react';
import {fetchUsersFromDatabase} from '../../apiCalls';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  

   verifyUser = (usersArray)=>{
     console.log(usersArray)
    const foundOne = usersArray.find(user => {
      return user.email === this.state.email && user.password === this.state.password;
    });
    console.log(foundOne);
        
  }

  handleSubmit = async (event)=>{
    event.preventDefault();
    const allUsers = await fetchUsersFromDatabase();
    this.verifyUser(allUsers);
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

export default Login;