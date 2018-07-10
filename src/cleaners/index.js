export const movieCleaner = (moviesData) => {

  return moviesData.results.map((movie) => {
    console.log(movie)
    const average = movie.vote_average;
    const id = movie.id;
    const popularity = movie.popularity;
    const posterPath = movie.poster_path;
    const backDropPath = movie.backdrop_path;
    const overview = movie.overview;

    return ({
      average,
      id,
      popularity,
      posterPath,
      backDropPath,
      overview
    })
  })
}