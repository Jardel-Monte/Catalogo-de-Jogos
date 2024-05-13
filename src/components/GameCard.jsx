import React from "react";
import { Link } from "react-router-dom"; 
import "./GameCard.css";

// esse componente um cartão do jogo exbindo a sua imagem e o seu titulo, além de possuir tbm um link de ver detalhes referente a informações adicionais sobre o jogo
const GameCard = ({ game }) => {
  return (
<div className="game-card">
<img
        src={game.image_url}
        alt={game.title}
      />
<h2 className="game-title">{game.title}</h2>
<Link to={`/Game/${game._id}`} >
        Ver Detalhes
</Link>
</div>
  );
};
 
export default GameCard;

