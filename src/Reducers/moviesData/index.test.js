import moviesData from './index';
import * as actions from '../../Actions';

describe('moviesData', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesData(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new movie', () => {
    const movies = [{isFave: false, title: 'happy'}];
    const expected = movies;
    const result = moviesData(undefined, actions.addMovies(movies));

    expect(result).toEqual(expected);
  });

});