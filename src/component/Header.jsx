import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const Header = ({ onSearch }) => (
  <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
    <h2>🎮 GameZone</h2>
    <InputGroup className="w-50">
      <Form.Control
        type="text"
        placeholder="Search games..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
    <Button variant="outline-light">📚 Library</Button>
  </header>
);

export default Header;
