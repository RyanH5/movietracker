import userReducer from './index';
import * as actions from '../../Actions';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {loginStatus: false};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new movie', () => {
    const initial = {id: '1', loginStatus: false, name: 'jeff'};
    const user = {id: '1', loginStatus: true, name: 'jeff'};
    const expected = user;
    const result = userReducer(initial, actions.toggleUserLogin(user));

    expect(result).toEqual(expected);
  });

  it('should ')
});