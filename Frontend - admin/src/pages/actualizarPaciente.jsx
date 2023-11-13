  import React, { useState, useEffect } from 'react';
  import { useLocation, useNavigate } from 'react-router-dom';
  import BotonVolver from '../components/Backbutton/BackButton';
  import PacientInfo from '../components/pacientInfo/PacientInfo';
  import Graphicinfo from '../components/graphicItems/GraphicItems';
  import "../styles/actualizarPaciente.css";

  const ActualizarPaciente = () => {
    const [id, setId] = useState('');
    const [heartPoints, setHeartPoints] = useState('');
    const [lungPoints, setLungPoints] = useState('');
    const [kidneyPoints, setKidneyPoints] = useState('');
    const [comments, setComments] = useState('');
    const [lastUpdate, setLastUpdate] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState([]);
    const[apellido, setApellido] = useState([]);
    const[edad, setEdad] = useState([]);
    const[sexo, setSexo] = useState([]);
    const[diagnostico, setDiagnostico] = useState([]);
    const[idtype, setIdtype] = useState([]);
    const[idnumber, setIdnumber] = useState([]);
    const[date, setDate] = useState([]);
    const[pcorazon, setPcorazon] = useState([]);
    const[ppulmon, setPpulmon] = useState([]);
    const[prinon, setPrinon] = useState([]);
    const[comentarios, setComentarios] = useState([]);

    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const _id = searchParams.get('_id');
      setId(_id);
    }, []); // Add missing closing parenthesis

    useEffect(() => {
      const fetchData = async () => {
        try {
          const searchParams = new URLSearchParams(location.search);
          const _id = searchParams.get('_id');
          const response = await fetch(`http://localhost:4000/api/v1/server/patientid?uid=${_id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          console.log(data)
          setNombre(data.nombre);
          setApellido(data.apellido);
          setEdad(data.edad);
          setSexo(data.sexo);
          setDiagnostico(data.diagnostico);
          setIdtype(data.idtype);
          setIdnumber(data.idnumber);
          setDate(data.date);
          setPcorazon(data.Pcorazon);
          setPpulmon(data.Ppulmon);
          setPrinon(data.Prinon);
          setComentarios(data.comentarios);
          console.log(date); // Add missing semicolon
        } catch (error) {
          console.error('Error al obtener los datos del paciente:', error);
        }
      };
      fetchData();
    }, [location.search]);

    const formatDateTime = (_seconds) => {
      const date = new Date(_seconds * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

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

    const handleUpdateClick = async () => {
      console.log(`ID: ${id}`);
      console.log(`Heart Points: ${heartPoints}`);
      console.log(`Lung Points: ${lungPoints}`);
      console.log(`Kidney Points: ${kidneyPoints}`);
      console.log(`Comments: ${comments}`);
      const response = await fetch(`http://localhost:4000/api/v1/server/patient?uid=${id}&Pcorazon=${heartPoints}&Prinon=${kidneyPoints}&Ppulmon=${lungPoints}&comentarios=${comments}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const currentDate = new Date();
      setLastUpdate(currentDate.toLocaleString());
      // Redireccionar a la ruta "/info"
      navigate('/info');
    };

    return (
      <div className="paall">
        <div className="menu1">
          <BotonVolver path="/info" />
        </div>

        <div className="columns">
          <div className="column1">
            <h1>Información básica del paciente</h1>
            <PacientInfo
              name={nombre + " " + apellido}
              id ={idtype}
              idnum ={idnumber}
              gender={sexo}
              age={edad}
              diagnostic={diagnostico}
              admission={formatDateTime(date?._seconds)}
            />
            <div className="history"></div>
          </div>
          <div className="column2">
            <div className="visual">
              <h1>Actualizar estado</h1>
              <div className="selects">
                <h2>Seleccionar puntajes:</h2>
                <div>
                  <label htmlFor="heartPoints">Puntaje para el corazón:</label>
                  <input
                    className="inputpoints"
                    type="number"
                    id="heartPoints"
                    name="heartPoints"
                    min="1"
                    max="10"
                    value={heartPoints}
                    onChange={handleHeartPointsChange}
                  />
                </div>
                <div>
                  <label htmlFor="lungPoints">Puntaje para el pulmón:</label>
                  <input
                    className="inputpoints"
                    type="number"
                    id="lungPoints"
                    name="lungPoints"
                    min="1"
                    max="10"
                    value={lungPoints}
                    onChange={handleLungPointsChange}
                  />
                </div>
                <div>
                  <label htmlFor="kidneyPoints">
                    Puntaje para los riñones:
                  </label>
                  <input
                    className="inputpoints"
                    type="number"
                    id="kidneyPoints"
                    name="kidneyPoints"
                    min="1"
                    max="10"
                    value={kidneyPoints}
                    onChange={handleKidneyPointsChange}
                  />
                </div>
              </div>
              <Graphicinfo
                name="Corazón"
                image="src/assets/AnatomicHeart.png"
                points={heartPoints}
                onChange={handleHeartPointsChange}
              />
              <Graphicinfo
                name="Pulmón"
                image="src/assets/Lungs.png"
                points={lungPoints}
                onChange={handleLungPointsChange}
              />
              <Graphicinfo
                name="Riñones"
                image="src/assets/Kidneys.png"
                points={kidneyPoints}
                onChange={handleKidneyPointsChange}
              />
              <div className="coments">
                <div className="coment">
                  <h3>Comentarios:</h3>
                  <textarea value={comments} onChange={handleCommentsChange} />
                </div>
              </div>
              <button className="buttonactualizar" onClick={handleUpdateClick}>Actualizar</button>
              <p>Fecha de última actualización: {lastUpdate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ActualizarPaciente;