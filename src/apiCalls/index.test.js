import React from 'react';
import { fetchSomeMovies, 
  postFavorite, 
  loginUser, 
  fetchFavorites, 
  removeFaveFromDatabase 
} from '../apiCalls/index';
import { mockMovieData } from './mockMovieData';
import { apiKey } from '../apiKey';

describe('api-calls', () => {
  describe('fetchSomeMovies', () => {
   
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMovieData)
      }));
    });
  
    it('should call fetch with the correct params', async () => {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=887`;
      await fetchSomeMovies();
  
      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  
    it('should return correct data', async () => {
      const expected = mockMovieData;
      const result = await fetchSomeMovies();
  
      expect(result).toEqual(expected);
    });
  });
  
  describe('postFavorite', () => {
    let userId;
    let url;
    let mockOptionsObj;
    let mockMovie;
    let pathAddition;
    let mockUser;
  
    beforeEach(() => {
      mockUser = {id: 3, name: 'bill', loginStatus: true};
      pathAddition = 'favorites/new';
      userId = 3;
      url = `http://localhost:3000/api/users/${pathAddition}`;
      mockMovie = {
        user_id: userId,
        movie_id: 5,
        title: 'jaws',
        poster_path: 'https://url.movie.jpeg',
        release_date: '2018-01-01',
        overview: 'Good Stuff',
        vote_average: 3
      };
      mockOptionsObj = {
        body: "{\"user_id\":3,\"title\":\"jaws\",\"overview\":\"Good Stuff\"}", headers: {"Content-Type": "application/json"}, 
        method: "POST"}
  
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMovieData)
      }));
    });
  
    it('should be called with correct params', async () => {
      await postFavorite(pathAddition, mockMovie, mockUser);
  
      expect(window.fetch).toHaveBeenCalledWith(url, mockOptionsObj);
    });
  });
  
  describe('removeFaveFromDatabase', () => {
    let pathDeletion;
    let mockUrl;
    let mockOptions;
    let userId;
  
    beforeEach(() => {
      userId = 1;
      pathDeletion = `${userId}/favorites/1`;
      mockUrl = `http://localhost:3000/api/users/${pathDeletion}`;
      mockOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          status: 'success',
          message: '1 row was deleted.'
        })
      }));
  
      it('should call fetch with correct params', async () => {
        await removeFaveFromDatabase(pathDeletion);
  
        expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
      });
  
      it('should return the correct data', async () => {
        const expected = {
          status: 'success',
          message: '1 row was deleted.'
        };
        const result = await removeFaveFromDatabase(pathDeletion);
  
        expect(result).toEqual(expected);
      });
    });
  });
});
