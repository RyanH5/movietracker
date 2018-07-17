import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard';
import './styles.css';
import PropTypes from 'prop-types';

export class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
  }

  favoritesDisplay = () => {
    const favorites = this.props.favorites.map((movie, index) => {
      return <MovieCard  {...movie} key={index} />;
    });
    return favorites;
  }

  render () {
    return (
      <div className="favorites-container">{this.favoritesDisplay()}</div>
    );
  }
}

FavoritesContainer.propTypes = {
  favorites: PropTypes.array.isRequired
};

export const mapStateToProps = (state) => ({
  favorites: state.user.favorites
});

export default connect(mapStateToProps)(FavoritesContainer);


