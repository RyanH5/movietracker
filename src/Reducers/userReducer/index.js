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
    default:
      return state;
  }
};

export default userReducer;

