import React from 'react';
import './styles.css';

const MovieCard = ({title, id, voteAverage, poster, overview, popularity, backdrop}) => {
  return (
    <div className="movie-card">
      <button>FAVORITE</button>
      <h1>{title}</h1>
      <h3>{voteAverage}</h3>
      <h4>{popularity}</h4>
      <h5>{overview}</h5>
      <img 
        src={poster}
        alt="" />
    </div>
  );
}

export default MovieCard;