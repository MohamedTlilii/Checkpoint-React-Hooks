import MovieCard from "./MovieCard";
import MoviesData from "../MoviesData"


const MovieList = () => {
    return (
      <div >
        {MoviesData.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    );
  };
  
  export default MovieList;