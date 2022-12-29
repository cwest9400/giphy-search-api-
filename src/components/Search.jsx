import React from "react";
import { useState, useEffect } from "react";
import "../style/search.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=10&offset=0&rating=pg&lang=en&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
      });
  }, [searchTerm]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="search-bar"
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="gifs">
          {/* <button type="submit">Search</button> */}
          {results.map((result) => (
            <img
              src={result.images.fixed_height.url}
              alt={result.title}
              key={result.url}
            />
          ))}
        </div>
      </form>
    </section>
  );
};

export default Search;
