import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  fetchUsersFromDatabase = async () => {
    const url = 'http://localhost:3000/api/users'
    const response = await fetch(url);
    const userData = await response.json();

    return userData.data
  }

  verifyUser = (usersArray)=>{
    const foundOne = usersArray.find(user => {
      return user.email === this.state.email && user.password === this.state.password;
    })    
  }

  handleSubmit = async (event)=>{
    event.preventDefault();
    const allUsers = await this.fetchUsersFromDatabase()
    this.verifyUser(allUsers)
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
    )
  }
}

export default Login;