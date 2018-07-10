import { apiKey } from '../apiKey';

export const fetchSomeMovies = async ()=>{
  const url = `https://api.themoviedb.org/4/list/1?api_key=${apiKey}`

  const response = await fetch(url)
  const moviesData = await response.json()
  return moviesData;
  
}