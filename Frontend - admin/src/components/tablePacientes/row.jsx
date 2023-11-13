import './tablePacientes.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const cont = React.createContext(); // Creamos el contexto

const Rowinfo = ({ key, info, cubiculo, name, id, state, date }) => {
    const [selectedRow, setSelectedRow] = useState(false);
    const [uid, setUid] = useState('');
    const navigate = useNavigate();

    const handleRowClick = () => {
        setSelectedRow(!selectedRow);
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/api/v1/server/patient/getuid?idnumber=${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await response.json();
                setUid(data);
                console.log(uid);
            } catch (error) {
                console.error("Error al obtener los datos del paciente:", error);
            }
        };
        fetchData();
    };

    const handleActualizarClick = () => {
        navigate(`/actualizar?_id=${info.id}`); // Redireccionar a la ruta /actualizar con los datos de la fila como parámetros en la URL
    }
    const handleDeleteClick = async () => {
        const response = await fetch(
            `http://localhost:4000/api/v1/server/patient?_id=${info.id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        window.location.reload(); // Recargar la página después de eliminar el paciente
    };

    return (
            <tr
                key={key}
                onClick={handleRowClick}
                style={{ backgroundColor: selectedRow ? "lightgrey" : "white" }}
            >
                <td>
                    <button className="cubículo-action-button" onClick={handleActualizarClick}>Actualizar estado</button>
                    <button className="cubículo-action-button" onClick={handleDeleteClick}>Dar de alta</button>
                </td>
                <td>{cubiculo}</td>
                <td>{name}</td>
                <td>{id}</td>
                <td>{state}</td>
                <td>{date}</td>
            </tr>
    );
};

export default Rowinfo;
