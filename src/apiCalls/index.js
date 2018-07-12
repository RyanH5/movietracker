import { apiKey } from '../apiKey';

export const fetchSomeMovies = async ()=>{
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
  
  const response = await fetch(url);
  const moviesData = await response.json();
  return moviesData; 
};

export const fetchUsersFromDatabase = async () => {
  const url = 'http://localhost:3000/api/users';
  const response = await fetch(url);
  const userData = await response.json();
  return userData.data;
};