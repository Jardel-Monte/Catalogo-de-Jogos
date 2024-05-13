import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Game.css";

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const getGame = async () => { // Função para buscar o jogo
      try {
        const response = await fetch(`https://catalogoapi-0ycs.onrender.com/${id}`); // Requisição para a API
        const data = await response.json(); 

        if (data.length === 0) { // Verifica se os dados do jogo estão vazios
          setLoading(false); 
        } else {
          setGame(data[0]); // Atualiza o estado do jogo
          setLoading(false); 
        }
      } catch (error) {
        console.error("Erro ao obter dados do jogo:", error); // Exibe erro no console
        setLoading(false); 
      }
    };

    getGame();
  }, [id]); caso id do jogo mude, a função sera ativads

  console.log("Estado atual de game:", game);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="game-page">
      <div className="info">
        <h2>{game.title}</h2>
      </div>
      <div className="info">
        <img src={game.image_url} alt="Imagem do jogo" id="imgGame"/>
      </div>
      <div className="info">
        <p className="tagline">{game.description}</p>
      </div>
      <div className="info">
        <h3>Ano de Lançamento:</h3>
        <p>{game.ano_Lancamento}</p>
      </div>
      <div className="info">
        <h3>Plataforma:</h3>
        <p>{game.plataforma}</p>
      </div>

      <div className="info">
        <iframe width="700px"  height="400px"  src={game.trailer_url} frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default Game;
