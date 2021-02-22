import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h3>My Work</h3>
    <p>Checkout the stuff I've done:</p>
    <Link to="/portfolio/1">My First Work</Link>
    <Link to="/portfolio/2">My Second Work</Link>
  </div>
);

export default PortfolioPage;