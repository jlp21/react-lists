import { useState } from 'react';
 
// import the array of movie objects
import moviesData from '../movies-data.json';
 
function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);
 
  return (
    <div>
      <h2>Movie List</h2>
    </div>
  );
}
 
export default MovieList;