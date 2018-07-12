import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event)=>{
    const {name, value} = event.target
    this.setState({[name]: value}) 
  }

  render(){
    return(
      <form>
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