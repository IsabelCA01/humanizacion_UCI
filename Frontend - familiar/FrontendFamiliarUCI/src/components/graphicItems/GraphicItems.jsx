import React from 'react';
import './graphicitems.css';

const Graphicinfo = ({ name, image, points }) => {
  return (
    <div className="graphicit">
        <h3>{name}</h3>
        <div className='infographic'>
          <div className="graphicitimg">
            <img src={image} width="40" height="50"/>
          </div>
        <p><span>Puntaje:</span> {points}/10</p>
        </div>
    </div>
  );
};

export default Graphicinfo;