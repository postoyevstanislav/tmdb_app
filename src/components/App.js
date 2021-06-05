import React, {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { MovieList } from './MovieList';
import { Nav } from './Nav';



function App() {
  const apiKey = 'b4e7239ec05624f521d3bafb199d0a05';

  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  
  const handleSearchValue = e => {
    setSearchInput(e.target.value)
  }

  const searchMovie = e => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`)
    .then(response => response.json())
    .then(data => {
      setMovies([...data.results])
    })
    setSearchInput('')
  }

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovies([...data.results])
    })
  }

  const getMovieInfo = id => {
      const filteredMovie = movies.filter(movie => movie.id === id);
      setCurrentMovie(filteredMovie)
  }

  const closeMovieInfo = () => {
    setCurrentMovie(null)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Nav value={searchInput} getMovies={getMovies} handleSearchValue={handleSearchValue} searchMovie={searchMovie} />
      { currentMovie === null ? 
      <Container>
        <Row>
          <MovieList movies={movies} handleMovieInfo={getMovieInfo} />
        </Row>
      </Container> :
      <MovieInfo currentMovie={currentMovie[0]} closeMovieInfo={closeMovieInfo} />}
      
    </div>
  );
}

export default App;
