import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa
  const [searchResults, setSearchResults] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false); // Estado para verificar se o botão de pesquisa foi clicado

  const handleSearch = async () => {
    if (!search) return;

    try {
      const response = await fetch(`https://catalogoapi-0ycs.onrender.com/titulo/${search}`);
      const data = await response.json();
      setSearchResults(data);
      setSearchTerm(search); // Atualiza o termo de pesquisa quando a pesquisa é realizada
      setSearchNotFound(data.length === 0);
    } catch (error) {
      console.error("Error searching for games:", error);
      setSearchResults([]);
      setSearchNotFound(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    setSearchButtonClicked(true); // Define que o botão de pesquisa foi clicado
  };

  const handleDetailsClick = () => {
    setSearchResults([]);
    setSearchNotFound(false);
    setSearchButtonClicked(false); // Define que o botão de pesquisa não foi clicado ao clicar em "ver detalhes"
  };

  return (
    <nav id="navbar">
      <div className="navbar-content">
        <h2>
          <Link to="/">
            <img id="img-logo" src="https://i.pinimg.com/originals/a5/1e/a9/a51ea91ab28cef8aa211fdea29ae89d3.gif" alt="Catalogo de Jogos SENAI" /> Catalogo de Jogos SENAI
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um jogo"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
      {searchButtonClicked && (
        <div className="search-container">
          {searchResults.length > 0 ? (
            <div className="search-header">
              <h3>Resultados para: {searchTerm}</h3> {/* Exibe o termo de pesquisa */}
              <div className="search-results">
                {searchResults.map((game) => (
                  <Link to={`/Game/${game._id}`} key={game._id} className="search-result">
                    <img src={game.image_url} alt={game.title} />
                    <h2>{game.title}</h2>
                    <Link to={`/Game/${game._id}`} className="details-link btn" onClick={handleDetailsClick}>Ver detalhes</Link>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="search-container">
              {searchNotFound && <h3>Nenhum resultado foi encontrado para: {searchTerm}</h3>} {/* Exibe a mensagem de nenhum resultado apenas se a pesquisa não for encontrada */}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;




