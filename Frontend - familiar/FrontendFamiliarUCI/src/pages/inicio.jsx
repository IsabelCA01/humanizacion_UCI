import "../styles/inicio.css";
import { useState } from "react";

import Carousel1 from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

const Index = () => {
    return (
      <div className="container">
        <div className="menu">
          <BurgerMenu/>
          <p>hola</p>
        </div>
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
          </div>
          <div className="backimage">
          <img src="src/assets/homeimage.jpg" alt="Logo-CES" border="0" width="500" height="550"></img>
          </div>
        </div>
        <div className='personal'>
          <h1 className="title">Nuestro Personal</h1>
          <div className="outcarousel">
            <br></br>
            <div className="carousel">
              <Carousel1/>
            </div>
          </div>
        </div>
        <div className="hda">
          <h1>Horarios de atención</h1>
          <div className="lyv">
            <div className="llamada">
              <h2>Horarios de Llamadas</h2>
              <p>Lunes a Viernes: 7:00 a.m. a 7:00 p.m.</p>
              <p>Sábados: 7:00 a.m. a 12:00 p.m.</p>
              <p>Domingos: 8 a.m. a 5 p.m. </p>
            </div>
            <div className="visitas">
              <h2>Horarios de visitas</h2>
              <p> 7 a.m a 8 a.m.</p>
              <p> 5 p.m. a 6 p.m.</p>
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  };
  
  export default Index;