import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import posterPlaceholder from './images/posterPlaceholder.jpg';
import { connect } from 'react-redux';
import { addFavorite } from '../../Actions';



const MovieCard = (props) => {
  

  const { title, voteAverage, poster, overview, popularity, id, releaseDate } = props;
  const userId = props.state.user.id;
  const movie = {id, userId, title, poster, releaseDate, voteAverage, overview }

  const renderImage = () => {
    return poster ? <img
      src={`https://image.tmdb.org/t/p/w200${poster}`}
      alt="" /> :

      <img src={posterPlaceholder} />;
  };



  return (
    <div className="movie-card">
      <button
        className="fave-button"
        onClick={()=>props.addFavorite(movie)}
      >FAVORITE</button>
      <h1>{title}</h1>
      <h3>vote average: {voteAverage}</h3>
      <h4>popularity: {popularity}</h4>
      {overview && <h5>summary: {overview}</h5>}

      {renderImage()}
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  voteAverage: PropTypes.number,
  poster: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  backdrop: PropTypes.string,
  releaseDate: PropTypes.string,
  addFavorite: PropTypes.func,
  state: PropTypes.object
  
};

export const mapStateToProps = (state) => ({
  state
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => dispatch(addFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);