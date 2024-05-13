import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "./GamesGrid.css"; //

const Home = () => {
  const [games, setGames] = useState([]);
  const anoLancamento = "2023"; // Defina o ano de lançamento desejado

  useEffect(() => { // Hook useEffect para buscar os jogos
    const getGames = async () => { // Função assíncrona para buscar os jogos
      try { 
        const response = await fetch(`https://catalogoapi-0ycs.onrender.com/ano/${anoLancamento}`);
        const data = await response.json(); // Converte a resposta para JSON
        setGames(data); // Atualiza o estado com os jogos obtidos
      } catch (error) { // Se ocorrer um erro
        console.error("Error fetching games:", error); 
      }
    };

    getGames();
  }, [anoLancamento]); // Atualize os jogos de acordo com o ano caso ele mude

  return (
    <div className="container">
      <h2 className="title">Jogos lançados em {anoLancamento}:</h2>
      <div className="games-container">
        {games.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;



