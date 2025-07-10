import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  return (
    <div className="favroitees-empty">
      <h2>No favorites Yet</h2>
      <p>Start Add some to favorite</p>
    </div>
  );
}

export default Favourites;
