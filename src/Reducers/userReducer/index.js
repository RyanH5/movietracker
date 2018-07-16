const userReducer = (state = { loginStatus: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_USER_LOGIN':
      return {
        ...state,
        id: action.user.id,
        name: action.user.name,
        loginStatus: !state.loginStatus
      };
    case 'USER_IS_FALSE':
      return {
        ...state,
        loginStatus: state.loginStatus
      };
    case 'REMOVE_FROM_FAVORITES':
      return {...state, favorites: state.favorites.filter((fave)=>{
        return action.favoriteId !== fave.id;
      })
      };

    case 'ADD_ALL_FAVS':
      return {...state, favorites: action.allFavorites};
    default:
      return state;
  }
};

export default userReducer;

