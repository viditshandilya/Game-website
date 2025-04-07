import React from 'react';
import GameCard from './GameCard';
import { Row, Col } from 'react-bootstrap';

const GameList = ({ games }) => (
  <Row>
    {games.map(game => (
      <Col md={4} key={game.id}>
        <GameCard game={game} />
      </Col>
    ))}
  </Row>
);

export default GameList;
