import React from 'react';
import "../styles/uciInfo.css";
import { useNavigate } from "react-router-dom";

import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Tabla from '../components/tablePacientes/tablePacientes';


const UciInfo = () => {
  const navigate = useNavigate()

  const handleIngresoClick = () => {
    navigate('/ingreso'); // Redireccionar a la ruta /ingreso
  }
  const handleActualizarClick = () => {
    navigate('/actualizar'); // Redireccionar a la ruta /actualizar
  }

  return (
    < div className="container">
      <div className='cont2'>
        <div className="menu">
            <BurgerMenu/>
            <p>hola</p>
        </div>
          
        <div className="informacion">
              <h1 className="title">Pacientes activos UCI</h1>
          <div className="table">
              <Tabla/>
          </div>
          <div className="buttonsinfo">
              <button className="cubículo-action-button" onClick={handleIngresoClick}>Ingresar paciente</button>
              <button className="cubículo-action-button" onClick={handleActualizarClick}>Actualizar estado</button>
              <button className="cubículo-action-button">Dar de alta</button>
          </div>
        </div>
      </div>
    </div>
    );
  };
    
  export default UciInfo;