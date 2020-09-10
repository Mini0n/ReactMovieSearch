import React from "react";

export default function SearchMovie() {
  return (
    <form className="form">
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
