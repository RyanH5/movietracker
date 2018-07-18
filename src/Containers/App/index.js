import React, { Component } from 'react';
import './styles.css';
import { fetchSomeMovies } from '../../apiCalls';
import { movieCleaner } from '../../cleaners';
import { addMovies } from '../../Actions';
import { connect } from 'react-redux';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class App extends Component {

  async componentDidMount() {
    const uncleanedMovies = await fetchSomeMovies();
    const movies = movieCleaner(uncleanedMovies);
    this.props.addMovies(movies);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  addMovies: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
