import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import posterPlaceholder from './images/posterPlaceholder.jpg';
import { connect } from 'react-redux';
import { addFavorite, removeFromFavorites } from '../../Actions';
import { postFavorite, removeFaveFromDatabase } from '../../apiCalls';
import { withRouter } from 'react-router';

export const MovieCard = (props) => {
  const { 
    title, 
    voteAverage, 
    poster, 
    overview, 
    popularity, 
    id, 
    releaseDate, 
    isFave 
  } = props;
  const userId = props.userId;
  const movie = { 
    id, 
    userId, 
    title, 
    poster, 
    releaseDate, 
    voteAverage, 
    popularity, 
    overview }; 
  const pathAddition = 'favorites/new';

  const renderImage = () => {
    return poster ? <img
      src={`https://image.tmdb.org/t/p/w200${poster}`}
      alt="" /> :
      <img src={posterPlaceholder} />;
  };

  const isDuplicate = (id) => {
    const nonDuplicates = props.favorites.filter((fav) => {
      return fav.id !== id;
    });
    return props.favorites.length !== nonDuplicates.length;
  };

  const handleFavorite = async (id) => {
    const pathDeletion = `${userId}/favorites/${id}`;
    if (props.isLoggedIn) {
      if (isDuplicate(id)) {
        await removeFaveFromDatabase(pathDeletion); 
        props.removeFromFavorites(id);
      } else {
        await postFavorite(pathAddition, movie, props.user);
        props.addFavorite(movie);
      }
    } else {
      props.history.push('/login');
    }
  };

  return (
    <div className="movie-card">
      <button
        className="fave-button"
        onClick={() => handleFavorite(id)}
        style={{
          color: isFave ? 'indianred' : '#98c5da'
        }}>
        FAVORITE
      </button>
      <h1 className="card-title">{title}</h1>
      {renderImage()}
      <h4>
        <span>Vote average:<span>&nbsp;&nbsp;&nbsp;</span></span>{voteAverage}
      </h4>
      <h4>
        <span>Popularity:<span>&nbsp;&nbsp;&nbsp;</span></span>{popularity}
      </h4>
      {overview && <h5 className="overview">Summary:   {overview}</h5>}
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  userId: PropTypes.number,
  voteAverage: PropTypes.number,
  poster: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  backdrop: PropTypes.string,
  releaseDate: PropTypes.string,
  addFavorite: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  removeFromFavorites: PropTypes.func,
  favorites: PropTypes.array,
  history: PropTypes.object,
  isFave: PropTypes.bool,
  user: PropTypes.object
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.user.loginStatus,
  userId: state.user.id,
  favorites: state.user.favorites,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => dispatch(addFavorite(movie)),
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieCard)
);