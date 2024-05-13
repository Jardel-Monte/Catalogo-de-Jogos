// src/pages/Search.jsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GameCard from "../components/GameCard";

import "./GamesGrid.css";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const [searchResults, setSearchResults] = useState([]);

  const searchGames = async () => {
    try {
      const response = await fetch(`https://catalogoapi-0ycs.onrender.com/titulo/${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching for games:", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (query) {
      searchGames();
    } else {
      setSearchResults([]);
    }
  }, [query]);

/*   return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="games-container">
        {searchResults.length > 0 &&
          searchResults.map((game) => <GameCard key={game._id} game={game} />)}
      </div>
    </div> 
  ); */
};

export default Search;

