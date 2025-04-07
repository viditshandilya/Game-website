import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <Card className="m-2" onClick={() => navigate(`/game/${game.id}`)} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={game.image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>{game.description.slice(0, 60)}...</Card.Text>
        <div>
          {game.tags.map(tag => <Badge key={tag} bg="secondary" className="me-1">{tag}</Badge>)}
        </div>
        <small className="text-muted">⭐ {game.rating}</small>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
