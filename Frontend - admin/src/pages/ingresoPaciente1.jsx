import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ingresoPaciente.css";
import { useAuth } from '../contexts/authContext';
import { useUid } from "../contexts/authContext";


import BotonVolver from '../components/Backbutton/BackButton';


const IngresoPaciente1 = () => {
    const navigate = useNavigate()
    const { singupfunction } = useAuth();
    const [error, setError] = useState();
    const [uiduser, setUiduser] = useState();

    const [createuser, setCreateuser] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({target: {name,value}}) => {
        if (name.startsWith("createuser_")) {
            setCreateuser({...createuser, [name.substring(11)]: value})
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            const uid1 = await singupfunction(createuser.email, createuser.password);
            console.log("uid ingresopaciente", uid1);
            navigate('/ingresoinfo', { state: { uid: uid1 } });
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/weak-password"){
                setError("La contraseña debe tener más de 6 carácteres.")
            } else if (error.code === "auth/missing-password"){
                setError("Debe elegir una contraseña")
            } else if( error.code === "auth/invalid-email"){
                setError("Email invalido")
            } else if( error.code === "auth/missing-email"){
                setError("Debe ingresar un email")
            } else if( error.code === "auth/email-already-in-use"){
                setError("El email ya se encuentra registrado")
            } else {
                setError(error.message)
            }
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
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="createuser_email" value={createuser.email} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="createuser_password" value={createuser.password} onChange={handleChange} required />
                    </div>
                    <div className='btning'>
                    <button type="submit">Crear Usuario</button>
                    </div>
                </form>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default IngresoPaciente1;