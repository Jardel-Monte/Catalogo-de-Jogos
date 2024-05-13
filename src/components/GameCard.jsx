import React from "react";
import "./GameCard.css"; // Importe o arquivo CSS para estilização específica do GameCard

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img
        src={game.image_url}
        alt={game.title}
      />
      <h2 className="game-title">{game.title}</h2>
      <a href={`/Game/${game._id}`} >
        Ver Detalhes
      </a>
    </div>
  );
};

export default GameCard;

