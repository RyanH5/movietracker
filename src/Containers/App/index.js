import React, { Component } from 'react';
import './styles.css';
import { fetchSomeMovies } from '../../apiCalls';
import { movieCleaner } from '../../cleaners';
import CardContainer from '../CardContainer';
import { addMovies } from '../../Actions';
import { connect } from 'react-redux';
import { Route, NavLink, Link } from 'react-router-dom';
import Header from '../../Components/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  async componentDidMount (){
    const uncleanedMovies = await fetchSomeMovies();
    const movies = movieCleaner(uncleanedMovies);
    this.props.addMovies(movies);
  }

  render() {
    return (
      <div className="App">
        <Header />
        
       <CardContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect (null, mapDispatchToProps)(App);