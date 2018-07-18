import React from 'react';
import { fetchSomeMovies, 
  postFavorite, 
  loginUser, 
  fetchFavorites, 
  removeFaveFromDatabase 
} from './';
import { mockMovieData } from './mockMovieData';
import { apiKey } from '../apiKey';

describe('fetchSomeMovies', () => {
  // correct params
  // correct data

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockMovieData)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=887`;
    await fetchSomeMovies();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockMovieData;
    const result = await fetchSomeMovies();

    expect(result).toEqual(expected);
  });
});