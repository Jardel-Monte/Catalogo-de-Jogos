import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do react-router-dom
import "./GameCard.css";
 
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

