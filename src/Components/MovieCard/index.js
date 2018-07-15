import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import posterPlaceholder from './images/posterPlaceholder.jpg';
import { connect } from 'react-redux';
import { addFavorite } from '../../Actions';
import { postFavorite } from '../../apiCalls';


const MovieCard = (props) => {
  const { title, voteAverage, poster, overview, popularity, id, releaseDate } = props;
  const userId = props.state.user.id;
  const movie = { id, userId, title, poster, releaseDate, voteAverage, overview };
  const pathAddition = 'favorites/new';

  const renderImage = () => {
    return poster ? <img
      src={`https://image.tmdb.org/t/p/w200${poster}`}
      alt="" /> :

      <img src={posterPlaceholder} />;
  };

  const checkForDuplicate = (tag) => {
    const allFavorites = props.state.user.favorites;
    const uncleanTitle = tag.innerText;
    const cleanTitle = uncleanTitle.substring(0, uncleanTitle.length - 8);
    console.log(cleanTitle)
    // allFavorites.some((fav) => {
    //   return fav.name === 
    // })
  };

  const allowAddFavorite = async (tag)=>{
    checkForDuplicate(tag);
    props.state.user.loginStatus && 
    await props.addFavorite(movie);
    postFavorite(pathAddition, props.state.favorite, props.state.user);
  };


  return (
    <div className="movie-card">
      <h1 className="card-title">{title}
        <button
          className="fave-button"
          onClick={(event) => allowAddFavorite(event.target.closest('h1'))}
        >
          FAVORITE</button>
      </h1>
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
  addFavorite: async (movie) => await dispatch(addFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);