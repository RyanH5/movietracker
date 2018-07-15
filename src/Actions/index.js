export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
});

export const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITE',
  favorite
});

export const toggleUserLogin = (user) =>({
  type: 'TOGGLE_USER_LOGIN',
  user
});

export const userIsFalse = (user) =>({
  type: 'USER_IS_FALSE',
  user
});