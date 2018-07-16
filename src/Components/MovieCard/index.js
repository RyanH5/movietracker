import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import posterPlaceholder from './images/posterPlaceholder.jpg';
import { connect } from 'react-redux';
import { addFavorite, removeFromFavorites } from '../../Actions';
import { postFavorite, removeFaveFromDatabase } from '../../apiCalls';
import { withRouter } from 'react-router';



const MovieCard = (props) => {
  const { title, voteAverage, poster, overview, popularity, id, releaseDate } = props;
  const userId = props.userId
  const movie = { id, userId, title, poster, releaseDate, voteAverage, overview };
  const pathAddition = 'favorites/new';
  
  const renderImage = () => {
    return poster ? <img
      src={`https://image.tmdb.org/t/p/w200${poster}`}
      alt="" /> :

      <img src={posterPlaceholder} />;
  };
  
  const isDuplicate = (id) => {
    const nonDuplicates = props.favorites.filter((fav) => {
      return fav.movie_id !== id;
    });
    return props.favorites.length !== nonDuplicates.length;
  };
  
  const handleFavorite = async (id) => {
    const pathDeletion = `${userId}/favorites/${id}`;
    if (props.isLoggedIn) {
      if (isDuplicate(id)){
        props.removeFromFavorites(id)
        await removeFaveFromDatabase(pathDeletion)
      } else {
        await props.addFavorite(movie);
        postFavorite(pathAddition, props.state.favorite, props.state.user);
      }
    } else {
      props.history.push('/login');
    }
  };
  
  // const handleFavorite = async (id)=>{
    //   if(props.isLoggedIn) {
      //     isDuplicate(id) ? 
      //       this.removeFromFavorites(id) : 
      //       await props.addFavorite(movie)
      //     postFavorite(pathAddition, props.state.favorite, props.state.user);
      //   } else {
        //     props.history.push('/login');
        //   }
  // };


  return (
    <div className="movie-card">
      <h1 className="card-title">{title}
        <button
          className="fave-button"
          onClick={() => handleFavorite(id)}
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
  state: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  removeFromFavorites: PropTypes.func,
  favorites: PropTypes.array

};

export const mapStateToProps = (state) => ({
  state,
  isLoggedIn: state.user.loginStatus,
  userId: state.user.id,
  favorites: state.user.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: async (movie) => await dispatch(addFavorite(movie)),
  removeFromFavorites: async (id) => await dispatch(removeFromFavorites(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCard));