  
import React from 'react';
import "../styles/infoPacientes.css";
import { useAuth }  from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

import PacientInfo from '../components/pacientInfo/PacientInfo';
import Graphicinfo from '../components/graphicItems/GraphicItems';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';

const InfoPaciente = () => {
  const { signout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = async e => {
    e.preventDefault();
    try {
      // Llamar a la función signout para cerrar la sesión
      await signout();
      navigate("/");
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  
  return (
    < div className="paall">
        <div className="bcerrar">
          <div className='hmenu'>
            <BurgerMenu/>
          </div>
          <div className="cerrar">
            <button className='btnlogout' onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        </div>
        <div className='columns'>
          <div className='column1'>
            <h1>Información básica del paciente</h1>
            <PacientInfo
            name="Juan Camilo Yepes"
            id = "Cédula de ciudadanía"
            idnum = "123456789"
            gender="Masculino"
            age="22"
            diagnostic="COVID-19"
            admission="10/06/2023"
            />
            <div className='history'>
              <h2>Historial de actualizaciones</h2>
            </div>
          </div>
          <div className='column2'>
            <div className='visual'>
              <h1>Última actualización</h1>
              <Graphicinfo
              name = "Corazón"
              image="src/assets/AnatomicHeart.png"
              points="7"/>
              <Graphicinfo
              name = "Pulmón"
              image="src/assets/Lungs.png"
              points="6"/>
              <Graphicinfo
              name = "Riñones"
              image="src/assets/Kidneys.png"
              points="9"/>
              <div className='coments'>
                <div className='coment'>
                  <h3>Comentarios:</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Voluptates ducimus labore at vero aliquam earum id, accusamus autem, 
                    in, cupiditate quibusdam voluptatum magnam quo placeat illum officiis corporis! 
                    Accusantium, officia!</p>
                  </div>
              </div>
              <p>Fecha de última actualización: 09/09/2023 14:05:08</p>
            </div>
          </div>
        </div>
    </div>
  );
};
  
  export default InfoPaciente;