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

  const searchGames = async () => { // Função assíncrona responsavel por buscar os jogos com base na consulta de pesquisa
    try {
      const response = await fetch(`https://catalogoapi-0ycs.onrender.com/titulo/${query}`);
      const data = await response.json();
      setSearchResults(data); atualiza os resultados da pesquisa com isso aq
    } catch (error) {
      console.error("Error searching for games:", error);
      setSearchResults([]);
    }
  };

  // Efeito para executar a busca sempre que a consulta de pesquisa mudar
  useEffect(() => {
    if (query) {
      searchGames();
    } else {
      setSearchResults([]);
    }
  }, [query]); // atualiza os resultados de novo
};

export default Search;

