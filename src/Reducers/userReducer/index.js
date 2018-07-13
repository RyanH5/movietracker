const userReducer = (state={loginStatus:false}, action) => {
  switch (action.type) {
    case 'TOGGLE_USER_LOGIN':
      
      return { ...state, 
        id: action.userData.id, 
        name: action.userData.name,
        loginStatus: !state.loginStatus  };
    default:
      return state;
  }
};

export default userReducer;

