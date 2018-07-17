import { apiKey } from '../apiKey';

export const fetchSomeMovies = async ()=>{
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
  
  const response = await fetch(url);
  const moviesData = await response.json();
  return moviesData; 
};

export const postFavorite = async (pathAddition, favorite, user) =>{
  try {
    const url = `http://localhost:3000/api/users/${pathAddition}`;
    const options = {
      method: 'POST',
      body: JSON.stringify({ 
        movie_id: favorite.id,
        user_id: user.id,
        title: favorite.title,
        poster_path: favorite.poster,
        release_date: favorite.releaseDate,
        vote_average: favorite.voteAverage,
        overview: favorite.overview
      }),
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw Error(response.status);
    }
    const favoriteData = await response.json();
    return favoriteData;
  } catch (error) {
    return false;
  }
};

export const loginUser = async ({ email, password, pathAddition, name}) => {
  try {
    const url = `http://localhost:3000/api/users/${pathAddition}`;
    const options = {
      method: 'POST',
      body: JSON.stringify({email, password, name}),
      headers: {'Content-Type': 'application/json'}
    };
    const response = await fetch(url, options);
    if (response.status !== 200){
      throw Error(response.status);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return false;
  }
};

export const fetchFavorites = async (pathAddition) => {
  try {
    const url = `http://localhost:3000/api/users/${pathAddition}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw Error(response.status);
    }
    const favoritesData = await response.json();
    return favoritesData;
  } catch (error) {
    return false;
  }
};

export const removeFaveFromDatabase = async (pathDeletion) => {
  try {
    const url = `http://localhost:3000/api/users/${pathDeletion}`;
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(url, options);
    const deletedFave = await response.json();
  } catch (error) {
    return false;
  }
};