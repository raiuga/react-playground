import React from 'react';

const PortfolioItemPage = (props) => (
  <div>
    <h3>A Thing I've Done</h3>
    <p>This page is for the item with id {props.match.params.id}</p>
  </div>
);

export default PortfolioItemPage;