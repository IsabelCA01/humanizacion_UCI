import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ingresoPaciente.css";
import { useAuth } from '../contexts/authContext';
import { useUid } from "../contexts/authContext";


import BotonVolver from '../components/Backbutton/BackButton';


const IngresoPaciente = () => {
    const navigate = useNavigate()
    const { singupfunction } = useAuth();
    const [error, setError] = useState();
    const [uiduser, setUiduser] = useState();


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

    const [createuser, setCreateuser] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({target: {name,value}}) => {
        if (name.startsWith("paciente_")) {
            setPaciente({...paciente, [name.substring(9)]: value})
        } else if (name.startsWith("createuser_")) {
            setCreateuser({...createuser, [name.substring(11)]: value})
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            const uid1 = await singupfunction(createuser.email, createuser.password);
            const uid = useUid();
            console.log("uid ingresopaciente", uid);
            setUiduser(uid1);
            console.log("uid user", uiduser);

            console.log(paciente);
            console.log(createuser);
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
                navigate('/info');
            } catch (error) {
                console.error('There was an error:', error);
            }
            // navigate('/info');
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/weak-password"){
                setError("La contraseña debe tener más de 6 carácteres.")
            }
            else if (error.code === "auth/missing-password"){
                setError("Debe elegir una contraseña")
            }
            else if( error.code === "auth/invalid-email"){
                setError("Email invalido")
            }
            else if( error.code === "auth/missing-email"){
                setError("Debe ingresar un email")
            }
            else if( error.code === "auth/email-already-in-use"){
                setError("El email ya se encuentra registrado")
            }
            else{
            setError(error.message)}
        }}; 
    
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

                    <div className='item'>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="createuser_email" value={createuser.email} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="createuser_password" value={createuser.password} onChange={handleChange} required />
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

export default IngresoPaciente;