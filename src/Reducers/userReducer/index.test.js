import userReducer from './index';
import * as actions from '../../Actions';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {loginStatus: false};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new movie', () => {
    const movies = [{isFave: false, title: 'happy'}];
    const expected = movies;
    const result = userReducer(undefined, actions.addMovies(movies));

    expect(result).toEqual(expected);
  });
});