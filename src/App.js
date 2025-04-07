import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import gamesData from './data/games';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  const filteredGames = gamesData.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !filters.category || game.category === filters.category;
    const matchesYear = !filters.year || game.year.toString() === filters.year;
    const matchesPopularity = !filters.popularity || game.popularity === filters.popularity;
    return matchesSearch && matchesCategory && matchesYear && matchesPopularity;
  });

  return (
    <Router>
      <Header onSearch={setSearch} />
      <Container fluid>
        <Row>
          <Col md={2}><Sidebar filters={filters} setFilters={setFilters} /></Col>
          <Col md={10}>
            <Routes>
              <Route path="/" element={<GameList games={filteredGames} />} />
              <Route path="/game/:id" element={<GameDetail />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
