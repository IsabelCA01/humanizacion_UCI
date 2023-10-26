import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import "./backButton.css";

const BotonVolver = () => {
    const iconStyle = {
      fontSize: '30px',
    };
  
    return (
      <Link to="/" className="back">
        <FontAwesomeIcon icon={faArrowLeft} style={iconStyle} />
      </Link>
    );
  }

export default BotonVolver;
