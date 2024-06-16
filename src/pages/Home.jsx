import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "./GamesGrid.css";

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true); 
  const anoLancamento = "2023"; 

  useEffect(() => { 
    const getGames = async () => { 
      try { 
        const response = await fetch(`https://catalogoapi-0ycs.onrender.com/ano/${anoLancamento}`);
        const data = await response.json(); 
        setGames(data);
        setLoading(false); 
      } catch (error) { 
        console.error("Error fetching games:", error); 
        setLoading(false);
      }
    };

    getGames();
  }, [anoLancamento]);

  // Verifica se está carregando e exibe a mensagem de carregamento
  if (loading) {
    return <div className="Loading cont"><p>Carregando... Aguarde</p></div>;
  }

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


