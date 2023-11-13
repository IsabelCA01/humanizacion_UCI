  import React, { useState, useEffect } from 'react';
  import "../styles/infoPacientes.css";
  import { useAuth }  from "../contexts/authContext";
  import { useNavigate } from "react-router-dom";


  import PacientInfo from '../components/pacientInfo/PacientInfo';
  import Graphicinfo from '../components/graphicItems/GraphicItems';
  import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
  import { useUid } from "../contexts/authContext";

  const InfoPaciente = () => {
    const { signout } = useAuth();
    const navigate = useNavigate()
    const uid = useUid(); // Obtenemos el uid desde el hook
    const { logoutFunction } = useAuth();


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

    const handleLogout = async e => {
      e.preventDefault();
      try {
        // Llamar a la función signout para cerrar la sesión
        await logoutFunction();
        navigate("/");
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:4000/api/v1/server/patient?uid=${uid}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          }
          });
          const data = await response.json();
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
          console.log(date)
        } catch (error) {
          console.error('Error al obtener los datos del paciente:', error);
        }
      };
      fetchData();
    }, [uid]);
    
    // Función para formatear la fecha y hora
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
              name={nombre + " " + apellido}
              id ={idtype}
              idnum ={idnumber}
              gender={sexo}
              age={edad}
              diagnostic={diagnostico}
              admission={formatDateTime(date?._seconds)}
              />
            </div>
            <div className='column2'>
              <div className='visual'>
                <h1>Última actualización</h1>
                <Graphicinfo
                name = "Corazón"
                image="src/assets/AnatomicHeart.png"
                points={pcorazon}/>
                <Graphicinfo
                name = "Pulmón"
                image="src/assets/Lungs.png"
                points={ppulmon}/>
                <Graphicinfo
                name = "Riñones"
                image="src/assets/Kidneys.png"
                points={prinon}/>
                <div className='coments'>
                  <div className='coment'>
                    <h3>Comentarios:</h3>
                    <p>{comentarios}</p>
                    </div>
                </div>
                <p>Fecha de última actualización: {formatDateTime(date?._seconds)}</p>
              </div>
            </div>
          </div>
          <div className='history'>
                <h2>Historial de actualizaciones</h2>
          </div>
      </div>
    );
  };
    
  export default InfoPaciente;