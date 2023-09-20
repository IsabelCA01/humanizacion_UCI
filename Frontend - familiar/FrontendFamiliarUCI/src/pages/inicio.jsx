import "../styles/inicio.css";
import { useState } from "react";

const Index = () => {
    return (
      <div>
      <div className="container">
        <div className="shadow">
        <div className="background">
          <div className="backgroundtext">
          <h1>Humanización UCI</h1>
          <h1> Clínica CES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.</p>
          <button className="button">Ver más</button>
          </div>
          <div className="backimage">
          <img src="src/assets/homeimage.jpg" alt="Logo-CES" border="0" width="300" height="300"></img>
          </div>
        </div>
        <div className='personal'>
          <h1 className="hetitle">Nuestro Personal</h1>
          <br></br>
          </div>
          
        </div>
        </div>
      </div>
    );
  };
  
  export default Index;