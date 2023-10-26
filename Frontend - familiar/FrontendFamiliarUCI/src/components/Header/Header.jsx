import React from "react";


import "./header.css";

const Header = () => {
  return (
      <div className="header">
        <div className="col1">
          <img className="logo" src="src/assets/logoclinicaCES.png" alt="logo" border="0"></img>
        </div>
        <div className="col2">
          <h1 className="hetitle">Unidad de Cuidados Intensivos</h1>
        </div>
      </div>
      
  );
};

export default Header;