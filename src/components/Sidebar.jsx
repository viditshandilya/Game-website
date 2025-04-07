import React from 'react';
import { Form } from 'react-bootstrap';

const Sidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <aside className="bg-light p-3">
      <h5>Filters</h5>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" onChange={handleChange}>
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
  <Form.Label>Release Year</Form.Label>
  <Form.Select name="year" onChange={handleChange}>
    <option value="">All</option>
    <option value="2025">2025</option>
    <option value="2024">2024</option>
    <option value="2023">2023</option>
    <option value="2022">2022</option>
  </Form.Select>
</Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Popularity</Form.Label>
        <Form.Select name="popularity" onChange={handleChange}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
        </Form.Select>
      </Form.Group>
    </aside>
  );
};

export default Sidebar;
