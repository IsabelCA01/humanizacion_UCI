import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import LogIn from "../../pages/login";
import Index from "../../pages/inicio";
import InfoPaciente from "../../pages/infoPacientes";

const Routespe = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/infopaciente" element={<ProtectedRoutes><InfoPaciente /></ProtectedRoutes>} />
            </Routes>
        </Router>
    );
};

export default Routespe;

