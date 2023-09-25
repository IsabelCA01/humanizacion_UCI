import React from 'react';
import './items.css';

const Items = ({ description, headline, image }) => {
  return (
    <div className="carouselitemcont">
      <img className='carouselitemimg' src={image} alt={headline} width="200" height="200"/>
      <h2>{headline}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Items;