import React, { useState, useEffect } from 'react';
import './tablePacientes.css';

import Rowinfo from './row';

const Tabla = () => {
  const [datos, setDatos] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const fetchPatientsInfo = async () => {
    const response = await fetch('http://localhost:4000/api/v1/server/patient/all');
    const data = await response.json();
    setDatos(data);
    console.log(datos);
  }

  useEffect(() => {
    fetchPatientsInfo();
    const intervalId = setInterval(fetchPatientsInfo, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Seleccionar</th>
          <th>Cubículo</th>
          <th>Paciente</th>
          <th>Documento</th>
          <th>Diagnóstico</th>
          <th>Última actualización</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((info) => (
          <Rowinfo infor={info} cubiculo={info.cubiculo} name={info.nombre} id={info.idnumber} state={info.diagnostico} date={info.apellido}/>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
