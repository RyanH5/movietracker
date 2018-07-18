export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
});

export const addAllFavs = (allFavorites) => ({
  type: 'ADD_ALL_FAVS',
  allFavorites
});

export const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITE',
  favorite
});

export const removeFromFavorites = (favoriteId) => ({
  type: 'REMOVE_FROM_FAVORITES',
  favoriteId
});

export const toggleUserLogin = (user) =>({
  type: 'TOGGLE_USER_LOGIN',
  user
});

export const userIsFalse = (user) =>({
  type: 'USER_IS_FALSE',
  user
});

export const userLogout = (user)=>({
  type: 'USER_LOGOUT',
  user
});