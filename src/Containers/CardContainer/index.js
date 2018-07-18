import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard';
import './styles.css';
import PropTypes from 'prop-types';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  updateFaveAttributeOnLoad = () => {
    const updatedMovies = this.props.movies.reduce((acc, movie) => {
      this.props.favorites.forEach((fave) => {
        if (fave.id === movie.id) {
          movie = { ...movie, isFave: true };
        }
      });

      acc = [...acc, movie];
      return acc;
    }, []);
    return this.makeCards(updatedMovies);
  }

  makeCards = (updatedMovies) => {
    const cards = updatedMovies.map((movie, index) => { 
      return <MovieCard {...movie} key={index} />;
    });
    return cards;
  }

  cardsDisplay = () => {
    if (this.props.movies) {
      const cards = this.props.movies.map((movie, index) => {
        return <MovieCard  {...movie} key={index} />;
      });
      return cards;
    }
  }

  render () {
    return (
      <div>
        {!this.props.favorites ?  
          <div className="card-container">{this.cardsDisplay()}</div>
          :
          <div className="card-container">{this.updateFaveAttributeOnLoad()}</div> 
        }
      </div>
    );
  }
}

CardContainer.propTypes = {
  movies: PropTypes.array,
  favorites: PropTypes.array
};

export const mapStateToProps = (state) => ({
  movies: state.moviesData,
  favorites: state.user.favorites,
  loginStatus: state.user.loginStatus
});

export default connect(mapStateToProps)(CardContainer);
