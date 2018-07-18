const moviesData = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...state, ...action.movies.map((movie)=>{
        return {...movie, isFave: false};
      })];
    default:
      return state;
  }
};

export default moviesData;