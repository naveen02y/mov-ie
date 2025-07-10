<<<<<<< HEAD
// home pages for our site
import MovieCard from "./components/MovieCard "

function Home(){
    const movies =[
        { id: 1, title:" john Wick " , release_date:"2020"},
        { id: 2, title:" Hritik Roshn " , release_date:"1990"},
        { id: 3, title:" Bhubali 2 : Conclusion" , release_date:"2018"},
        { id: 4, title:" Tumbbad " , release_date:"2019"},           {  id: 5, title:" Patal Lok " , release_date:"2022"}
    ];

    function handleSearch () {};  

     return
        <div className="home">
            <form onSubmit={handleSearch} className= "search-form">
                <input type="text"
                placeholder="Search for movie..."
                className="search-input"
                />
                <button type="submit" className="search-button"></button>
                </form>
            
            <div className="movie-grid">
                {movies.map( (movie) => <MovieCard movie ={movie} key={movie.id} />)}
                
                </div>
                </div>

        
     
}
=======
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getSearchmovies, getPopularMovies } from "../assets/services/api";
import { useState, useEffect } from "react";
// const movies = [
//   { title: "Tumbaad", id: "1", release_date: "1992" },
//   { title: "Interstellar", id: "2", release_date: "2014" },
//   { title: "Chummaeshwari", id: "3", release_date: "2022" },
// ];

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies(); // Call the async function inside useEffect
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (errr) {
      console.log(err);
      setError("Failed to Search");
    } // Prevents page reload on form submission
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading ? (
        <div className="loading"> Loadng....</div>
      ) : (
        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
>>>>>>> de999fd (Final commit Project completely)
