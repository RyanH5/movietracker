import * as actions from './index';

describe('actions', () => {
  describe('addMovies', () => {
    it('should have a type of ADD_MOVIES', () => {
      const movies = [{title: 'happy'}];
      const expectedAction = {
        type: 'ADD_MOVIES',
        movies: [{title: 'happy'}]
      }
      const result = actions.addMovies(movies);

      expect(result).toEqual(expectedAction)
    });
  });
})