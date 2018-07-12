import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <form>
        <input 
          type="text" 
          placeholder="email" 
          value={this.state.email}
          name="email"
          />
        <input 
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