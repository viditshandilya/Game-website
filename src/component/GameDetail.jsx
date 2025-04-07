import React from 'react';
import { useParams } from 'react-router-dom';
import games from '../data/games';

const GameDetail = () => {
  const { id } = useParams();
  const game = games.find(g => g.id.toString() === id);

  if (!game) return <p>Game not found</p>;

  return (
    <div className="p-4">
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <img src={game.image} alt={game.name} className="img-fluid" />
      <h5 className="mt-4">System Requirements</h5>
      <ul><li>{game.requirements}</li></ul>
      <h5>Price: {game.price ? `$${game.price}` : "Free"}</h5>
      <h6>Rating: ⭐ {game.rating}</h6>
    </div>
  );
};

export default GameDetail;
