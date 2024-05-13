import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "./GamesGrid.css"; // Ajuste do caminho de importação

const Home = () => {
  const [games, setGames] = useState([]);
  const anoLancamento = "2023"; // Defina o ano de lançamento desejado

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch(`https://catalogoapi-0ycs.onrender.com/ano/${anoLancamento}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    getGames();
  }, [anoLancamento]); // Atualize os jogos sempre que o ano de lançamento mudar

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



