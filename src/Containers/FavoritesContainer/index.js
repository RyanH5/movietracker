import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard';
import './styles.css';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';

export class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
  }

  favoritesDisplay = () => {
    if (this.props.favorites.length) {
      const favorites = this.props.favorites.map((movie, index) => {
        return <MovieCard  {...movie} key={index} />;
      });
      return favorites;
    } else {
      return <div>
        <h3>Sorry, no faves.</h3>
        <NavLink
          to="/"
          className="nav logout">
          Back to Movies.
        </NavLink>;
      </div>;
    }
  }

  render() {
    // console.log(this.props.favorites);

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

export default withRouter(connect(mapStateToProps)(FavoritesContainer));


