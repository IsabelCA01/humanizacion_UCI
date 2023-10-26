import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ingresoPaciente.css";


import BotonVolver from '../components/Backbutton/BackButton';

const IngresoPaciente = () => {
    const navigate = useNavigate()

    const [paciente, setPaciente] = useState({
        cubiculo: "",
        nombre: "",
        apellido: "",
        tipodocumento: "",
        numdocumento: "",
        edad: "",
        sexo: "",
        diagnostico: "",
        email: "",
        fechadeingreso: "",
    });

    const [createuser, setCreateuser] = useState({
        email: "",
        password: "",
    });

    const handleChange = ({target: {name,value}}) => {
        setPaciente({...paciente, [name]: value})
        setCreateuser({...createuser, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/info');
        
        // try {
        //     await axios.post('API_URL', paciente); // Replace API_URL with the URL of your API endpoint
        //     history.push('/info');
        // } catch (error) {
        //     console.error(error);
        // }
    }

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
                        <select id="cubiculo" name="cubiculo" value={paciente.cubiculo} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='item'>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={paciente.nombre} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" value={paciente.apellido} onChange={handleChange} required />
                    </div>
                    <div className='item'>
                        <label htmlFor="tipodocumento">Tipo de documento:</label>
                        <select id="tipodocumento" name="tipodocumento" value={paciente.tipodocumento} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="CC">Cédula de ciudadanía</option>
                            <option value="CE">Cédula de extranjería</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="RC">Registro civil</option>
                        </select>
                    </div>

                    <div className='item'>
                        <label htmlFor="numdocumento">Número de documento:</label>
                        <input type="text" id="numdocumento" name="numdocumento" value={paciente.numdocumento} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="edad">Edad:</label>
                        <input type="number" id="edad" name="edad" value={paciente.edad} onChange={handleChange} required />
                    </div>
                    
                    <div className='item'>
                        <label htmlFor="sexo">Sexo:</label>
                        <select id="sexo" name="sexo" value={paciente.sexo} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="F">Femenino</option>
                            <option value="M">Masculino</option>
                            <option value="O">Otro</option>
                        </select>
                    </div>

                    <div className='item'>
                        <label htmlFor="diagnostico">Diagnóstico:</label>
                        <textarea id="diagnostico" name="diagnostico" value={paciente.diagnostico} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="fechadeingreso">Fecha de ingreso:</label>
                        <input type="date" id="fechadeingreso" name="fechadeingreso" value={paciente.fechadeingreso} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" value={paciente.email} onChange={handleChange} required />
                    </div>

                    <div className='item'>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" value={createuser.password} onChange={handleChange} required />
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