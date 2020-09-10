import React from "react";

export default function SearchMovie() {
  const key = process.env.REACT_APP_TMDB_API_KEY;

  const srch = "/search/movie";
  const lang = "language-en-US";
  const query = "Midsommar";

  const url = `https://api.themoviedb.org/3${srch}?api_key=${key}&${lang}&query=${query}`;

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("Searching...");

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Search a Movie:
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="Midsommar"
        defaultValue="Midsommar"
        autoComplete="off"
      ></input>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
