import React, { useState } from 'react';
// import MovieCard from './movieCard';

export default function SearchMovie() {
  // states- input query, movies
  const [query, setQuery] = useState('Midsommar');
  const [movies, setMovies] = useState([]);

  const key = process.env.REACT_APP_TMDB_API_KEY;

  const srch = '/search/movie';
  const lang = 'language-en-US';
  // const query = 'Midsommar';

  const url = `https://api.themoviedb.org/3${srch}?api_key=${key}&${lang}&query=${query}`;

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor='query'>
          Search a Movie:
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='Midsommar'
          autoComplete='off'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className='button' type='submit'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            // <MovieCard card={movie} />

            <div className='card' key={movie.id}>
              <img
                className='card--image'
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
              />
              <div className='card--content'>
                <h3 className='card--title'>{movie.title}</h3>
                <p>
                  <small>RELEASE: {movie.release_date}</small>
                </p>
                <p>
                  <small>RATING: {movie.vote_average}</small>
                </p>
                <p className='card--desc'>{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
