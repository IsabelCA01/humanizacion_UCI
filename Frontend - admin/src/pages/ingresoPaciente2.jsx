import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ingresoPaciente.css";
import { useAuth } from '../contexts/authContext';


import BotonVolver from '../components/Backbutton/BackButton';
import { useLocation } from 'react-router-dom';


const IngresoPaciente2 = () => {
    const navigate = useNavigate()
    const { singupfunction } = useAuth();
    const [error, setError] = useState();
    const location = useLocation();
    const uid1 = location.state.uid;
    const[docid, setDocid] = useState();

    const [paciente, setPaciente] = useState({
        cubiculo: "",
        nombre: "",
        apellido: "",
        idtype: "",
        idnumber: "",
        edad: "",
        sexo: "",
        diagnostico: "",
        fechadeingreso: "",
        Ppulmon: "",
        Pcorazon:"",
        Prinon:"",
        comentarios:"",
    });


    const handleChange = ({target: {name,value}}) => {
        if (name.startsWith("paciente_")) {
            setPaciente({...paciente, [name.substring(9)]: value})
        } 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            try {
                const response = await fetch(`http://localhost:4000/api/v1/server/patient`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Pcorazon: paciente.Pcorazon,
                        Prinon: paciente.Prinon,
                        Ppulmon: paciente.Ppulmon,
                        comentarios: paciente.comentarios,
                        nombre: paciente.nombre,
                        apellido: paciente.apellido,
                        edad: paciente.edad,
                        diagnostico: paciente.diagnostico,
                        cubiculo: paciente.cubiculo,
                        idnumber: paciente.idnumber,
                        idtype: paciente.idtype,
                        sexo: paciente.sexo,
                        date: paciente.fechadeingreso
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                try {
                    const response1 = await fetch(
                        `http://localhost:4000/api/v1/server/patient/getid?idnumber=${paciente.idnumber}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const datadoc = await response1.json();
                    setDocid(datadoc);
                    console.log(datadoc);

                    try{
                        const response = await fetch(`http://localhost:4000/api/v1/server/user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Pcorazon: paciente.Pcorazon,
                        Prinon: paciente.Prinon,
                        uid: uid1,
                        paciente: datadoc
                    })
                    });
                    if (!response.ok) {
                    throw new Error('Network response was not ok');
                    }
                    navigate('/info');
                    } catch (error) {
                        console.error("Error al crear el doc usuario:", error);
                    }

                } catch (error) {
                    console.error("Error al obtener el id del documento:", error);
                }
            } catch (error) {
                console.error('There was an error:', error);
            }
        } catch (error) {
            console.error('There was an error:', error);
        }
    }; 
    
    return (
        <div className="container">
            <div className='cont2'>
                <div className="menu1">
                    <BotonVolver path="/info"/>
                    <p>hola</p>
                </div>
                <div className='containeringreso'>
                <div className='colingreso'>
                    <h1 >Ingreso de paciente</h1>
                <div className='formingreso'>
                <form onSubmit={handleSubmit}>
                    <div className='item'>
                        <label htmlFor="cubiculo">Cubículo:</label>
                        <select id="cubiculo" name="paciente_cubiculo" value={paciente.cubiculo} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='item'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="paciente_nombre" value={paciente.nombre} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="paciente_apellido" value={paciente.apellido} onChange={handleChange} required />
                    </div>
                    <div className='item'>
                        <label htmlFor="tipodocumento">Tipo de documento:</label>
                        <select id="tipodocumento" name="paciente_idtype" value={paciente.idtype} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="CE">Cédula de extranjería</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="RC">Registro civil</option>
                        </select>
                    </div>

                    <div className='item'>
                        <label htmlFor="numdocumento">Número de documento:</label>
                        <input type="text" id="numdocumento" name="paciente_idnumber" value={paciente.idnumber} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="edad">Edad:</label>
                        <input type="number" id="edad" name="paciente_edad" value={paciente.edad} onChange={handleChange} required />
                    </div>
                    
                    <div className='item'>
                        <label htmlFor="sexo">Sexo:</label>
                        <select id="sexo" name="paciente_sexo" value={paciente.sexo} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div className='item'>
                        <label htmlFor="diagnostico">Diagnóstico:</label>
                        <textarea id="diagnostico" name="paciente_diagnostico" value={paciente.diagnostico} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="fechadeingreso">Fecha de ingreso:</label>
                        <input type="date" id="fechadeingreso" name="paciente_fechadeingreso" value={paciente.fechadeingreso} onChange={handleChange} required />
                    </div>
                    <div className='btning'>
                    <button type="submit">Ingresar Paciente</button>
                    </div>
                </form>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default IngresoPaciente2;