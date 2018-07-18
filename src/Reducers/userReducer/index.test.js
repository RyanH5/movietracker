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

  it('should set loginStatus to false', () => {
    const initial = {loginStatus: false};
    const expected = {loginStatus: false};
    const result = userReducer(initial, actions.userIsFalse(expected));

    expect(result).toEqual(expected);
  });

  it('should add a favorite to the store', () => {
    const initial = {favorites:[{title: 'saw', id: 3, isFave: true}]};
    const newFav = {title: 'movie', id: 4, isFave: false};
    const expected = {favorites:[{
      title: 'saw',
      id: 3,
      isFave: true
    }, {
      title: 'movie',
      id: 4,
      isFave: true
    }
    ]};
    const result = userReducer(initial, actions.addFavorite(newFav));

    expect(result).toEqual(expected);
  });

  it('should remove movie from favorites', () => {
    const expected = {favorites: [{title: 'saw', id: 3, isFave: true}]};
    const removeFav = 4;
    const initial = {favorites:[{
      title: 'saw',
      id: 3,
      isFave: true
    }, {
      title: 'movie',
      id: 4,
      isFave: true
    }
    ]};
    const result = userReducer(initial, actions.removeFromFavorites(removeFav));

    expect(result).toEqual(expected);
  });

  it('should add all favorites ', () => {
    const expected = {favorites:[{
      title: 'saw',
      id: 3,
      isFave: true
    }, {
      title: 'movie',
      id: 4,
      isFave: true
    }
    ]};
    const  initial = [];
    const allFavs = [{
      title: 'saw',
      id: 3,
      isFave: true
    }, {
      title: 'movie',
      id: 4,
      isFave: true
    }
    ];
    const result = userReducer(initial, actions.addAllFavs(allFavs));

    expect(result).toEqual(expected);
  });
});