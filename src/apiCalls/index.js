import { apiKey } from '../apiKey';

export const fetchSomeMovies = async ()=>{
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
  
  const response = await fetch(url);
  const moviesData = await response.json();
  return moviesData; 
};

export const postNewUserToDatabase = async ({ name, email, password }) => {
  const url = 'http://localhost:3000/api/users/new';
  const options = {
    method: 'POST',
    body: JSON.stringify({ name ,email, password }),
     headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(url, options);
  const userData = await response.json();
  return userData.data;
};

export const loginUser = async ({email, password}) => {
  try {
    const url = 'http://localhost:3000/api/users/';
    const options = {
      method: 'POST',
      body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}
    };
    const response = await fetch(url, options);
    if (response.status !== 200){
      throw Error(response.status)
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return false;
  }
};