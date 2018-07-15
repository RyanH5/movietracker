import React, { Component } from 'react';
import {loginUser, fetchFavorites} from '../../apiCalls';
import { toggleUserLogin, userIsFalse, addAllFavs } from '../../Actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      hasErrored: false,
      pathAddition: ''
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
      this.props.toggleUserLogin(user.data);
      const pathAddition = `${user.data.id}/favorites`; 
      const favorites = await fetchFavorites(pathAddition);
      this.props.addAllFavs(favorites.data);
      
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        {
          this.state.hasErrored && 
        <h2>Your email or password does not match an existing user.</h2>
        }
        <h2>LOGIN</h2>
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
        >Login</button>
      </form>
    );
  }
}

Login.propTypes = {
  toggleUserLogin: PropTypes.func.isRequired,
  userIsFalse: PropTypes.func.isRequired,
  addAllFavs: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => ({
  loginStatus: state.user.loginStatus,
  userId: state.user.id
});

export const mapDispatchToProps = (dispatch)=>({
  toggleUserLogin: (user)=>dispatch(toggleUserLogin(user)),
  userIsFalse: (user)=>dispatch(userIsFalse(user)),
  addAllFavs: (favorites) => dispatch(addAllFavs(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);