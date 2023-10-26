import './tablePacientes.css';
import React, { useState } from 'react';

const Rowinfo = ({info, cubiculo, name, id, state, date}) => {
    const [selectedRow, setSelectedRow] = useState(false);

    const handleRowClick = () => {
        setSelectedRow(!selectedRow);
    };

    return (
        <tr
            key={id}
            onClick={handleRowClick}
            style={{ backgroundColor: selectedRow ? 'lightgrey' : 'white' }}
        >
            <td>
                <input
                    type='checkbox'
                    checked={selectedRow}
                    onChange={handleRowClick}
                />
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
