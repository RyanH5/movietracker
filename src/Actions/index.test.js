import * as actions from './index';

describe('actions', () => {
  describe('addMovies', () => {
    it('should have a type of ADD_MOVIES', () => {
      const movies = [{ title: 'happy' }];
      const expectedAction = {
        type: 'ADD_MOVIES',
        movies: [{ title: 'happy' }]
      };
      const result = actions.addMovies(movies);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('addAllFavs', () => {
    it('should have a type of ADD_ALL_FAVS', () => {
      const allFavorites = [{ title: 'happy' }];
      const expectedAction = {
        type: 'ADD_ALL_FAVS',
        allFavorites: [{ title: 'happy' }]
      };
      const result = actions.addAllFavs(allFavorites);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('addFavorite', () => {
    it('should have a type of ADD_ALL_FAVS', () => {
      const favorite = [{ title: 'happy' }];
      const expectedAction = {
        type: 'ADD_FAVORITE',
        favorite: [{ title: 'happy' }]
      };
      const result = actions.addFavorite(favorite);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('removeFromFavorites', () => {
    it('should have a type of REMOVE_FROM_FAVORITES', () => {
      const favoriteId = [{ id: 3}];
      const expectedAction = {
        type: 'REMOVE_FROM_FAVORITES',
        favoriteId: [{ id: 3 }]
      };
      const result = actions.removeFromFavorites(favoriteId);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('toggleUserLogin', () => {
    it('should have a type of TOGGLE_USER_LOGIN', () => {
      const user = [{ id: 3, loginStatus: true}];
      const expectedAction = {
        type: 'TOGGLE_USER_LOGIN',
        user: [{ id: 3, loginStatus: true }]
      };
      const result = actions.toggleUserLogin(user);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('userIsFalse', () => {
    it('should have a type of USER_IS_FALSE', () => {
      const user = [{ id: 3, loginStatus: false}];
      const expectedAction = {
        type: 'USER_IS_FALSE',
        user: [{ id: 3, loginStatus: false }]
      };
      const result = actions.userIsFalse(user);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('userLogout', () => {
    it('should have a type of USER_LOGOUT', () => {
      const user = [{ id: 3, loginStatus: false}];
      const expectedAction = {
        type: 'USER_LOGOUT',
        user: [{ id: 3, loginStatus: false }]
      };
      const result = actions.userLogout(user);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('userSignup', () => {
    it('should have a type of USER_SIGNUP', () => {
      const user = [{ id: 3, loginStatus: false}];
      const expectedAction = {
        type: 'USER_SIGNUP',
        user: [{ id: 3, loginStatus: false }]
      };
      const result = actions.userSignup(user);

      expect(result).toEqual(expectedAction);
    });
  });
});