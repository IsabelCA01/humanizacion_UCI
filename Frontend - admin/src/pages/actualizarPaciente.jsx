  import React, { useState } from 'react';
  import "../styles/actualizarPaciente.css";
  import { useNavigate } from "react-router-dom";

  import PacientInfo from '../components/pacientInfo/PacientInfo';
  import Graphicinfo from '../components/graphicItems/GraphicItems';
  import BotonVolver from '../components/Backbutton/BackButton';

  const ActualizarPaciente = () => {
    const [heartPoints, setHeartPoints] = useState("");
    const [lungPoints, setLungPoints] = useState("");
    const [kidneyPoints, setKidneyPoints] = useState("");
    const [comments, setComments] = useState("");
    const [lastUpdate, setLastUpdate] = useState("");

    const handleHeartPointsChange = (event) => {
      setHeartPoints(event.target.value);
    };

    const handleLungPointsChange = (event) => {
      setLungPoints(event.target.value);
    };

    const handleKidneyPointsChange = (event) => {
      setKidneyPoints(event.target.value);
    };

    const handleCommentsChange = (event) => {
      setComments(event.target.value);
    };

    const navigate = useNavigate()

    const handleUpdateClick = () => {
      // Aquí se debe enviar los datos a la base de datos
      console.log(`Heart Points: ${heartPoints}`);
      console.log(`Lung Points: ${lungPoints}`);
      console.log(`Kidney Points: ${kidneyPoints}`);
      console.log(`Comments: ${comments}`);
      const currentDate = new Date();
      setLastUpdate(currentDate.toLocaleString());
      // Redireccionar a la ruta "/info"
      navigate('/info');
    };

    return (
      < div className="paall">
          <div className='menu1'>
            <BotonVolver path="/info"/>
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
                <h1>Actualizar estado</h1>
                <div className='selects'>
                <h2>Seleccionar puntajes:</h2>
                <div>
                  <label htmlFor="heartPoints">Puntaje para el corazón:</label>
                  <input type="number" id="heartPoints" name="heartPoints" min="1" max="10" value={heartPoints} onChange={handleHeartPointsChange} />
                </div>
                <div>
                  <label htmlFor="lungPoints">Puntaje para el pulmón:</label>
                  <input type="number" id="lungPoints" name="lungPoints" min="1" max="10" value={lungPoints} onChange={handleLungPointsChange} />
                </div>
                <div>
                  <label htmlFor="kidneyPoints">Puntaje para los riñones:</label>
                  <input type="number" id="kidneyPoints" name="kidneyPoints" min="1" max="10" value={kidneyPoints} onChange={handleKidneyPointsChange} />
                </div>
              </div>
                <Graphicinfo
                name = "Corazón"
                image="src/assets/AnatomicHeart.png"
                points={heartPoints}
                onChange={handleHeartPointsChange}
                />
                <Graphicinfo
                name = "Pulmón"
                image="src/assets/Lungs.png"
                points={lungPoints}
                onChange={handleLungPointsChange}
                />
                <Graphicinfo
                name = "Riñones"
                image="src/assets/Kidneys.png"
                points={kidneyPoints}
                onChange={handleKidneyPointsChange}
                />
                <div className='coments'>
                  <div className='coment'>
                    <h3>Comentarios:</h3>
                    <textarea value={comments} onChange={handleCommentsChange} />
                  </div>
                </div>
                <button onClick={handleUpdateClick}>Actualizar</button>
                <p>Fecha de última actualización: {lastUpdate}</p>
              </div>
            
            </div>
          </div>
      </div>
    );
  };
    
  export default ActualizarPaciente;