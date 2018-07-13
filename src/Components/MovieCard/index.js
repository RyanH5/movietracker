import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const MovieCard = ({title, id, voteAverage, poster, overview, popularity, backdrop}) => {
  console.log(poster)
  return (
    <div className="movie-card">
      <button>FAVORITE</button>
      <h1>{title}</h1>
      <h3>{voteAverage}</h3>
      <h4>{popularity}</h4>
      <h5>{overview}</h5>
      <img 
        
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt="" />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  voteAverage: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string, 
  popularity: PropTypes.number,
  backdrop: PropTypes.string
};

export default MovieCard;