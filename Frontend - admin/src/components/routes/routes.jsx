import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import LogIn from "../../pages/login";
import Index from "../../pages/inicio";
import ActualizarPaciente from '../../pages/actualizarPaciente';
import UciInfo from "../../pages/uciInfo";
import IngresoPaciente from '../../pages/ingresoPaciente';

const Routespe = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/actualizar" element={<ProtectedRoutes><ActualizarPaciente /></ProtectedRoutes>} />
                <Route path="/info" element={<ProtectedRoutes><UciInfo/></ProtectedRoutes>} />
                <Route path="/ingreso" element={<ProtectedRoutes><IngresoPaciente/></ProtectedRoutes>} />
            </Routes>
        </Router>
    );
};

export default Routespe;

