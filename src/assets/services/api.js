export const getPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=14ad0a5955e6b2694046d159c0fa97a7"
  );
  const data = await response.json();
  return data.results;
};

export const getSearchmovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=14ad0a5955e6b2694046d159c0fa97a7&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();

  return data.results;
};
