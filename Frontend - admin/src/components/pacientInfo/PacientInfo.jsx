import React from 'react';
import './pacientInfo.css';

const PacientInfo = ({ name, id, idnum, age, gender, diagnostic, admission }) => {
  return (
    <div className="pacinfocont">
        <p><span>Nombre:</span> {name}</p>
        <p><span>Tipo de documento:</span> {id}</p>
        <p><span>Número de documento:</span> {idnum}</p>
        <p><span>Edad:</span> {age}</p>
        <p><span>Género:</span> {gender}</p>
        <p><span>Diagnóstico:</span> {diagnostic}</p>
        <p><span>Fecha de ingreso:</span> {admission}</p>
    </div>
  );
};

export default PacientInfo;