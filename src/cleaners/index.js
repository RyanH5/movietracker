export const movieCleaner = (moviesData) => {
  console.log(moviesData)
  return moviesData.results.map(movie => {
    const title = movie.title;
    const id = movie.id;
    const voteAverage = movie.vote_average;
    const poster = movie.poster_path;
    const overview = movie.overview;
    const popularity = movie.popularity;
    const backdrop = movie.backdrop_path;
    const releaseDate = movie.release_date;

    return ({
      title,
      id,
      voteAverage,
      poster,
      overview,
      popularity,
      backdrop,
      releaseDate
    });
  });
};