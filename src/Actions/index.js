export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
});

export const toggleUserLogin = (user) =>({
  type: 'TOGGLE_USER_LOGIN',
  user
});

export const userIsFalse = (user) =>({
  type: 'USER_IS_FALSE',
  user
});