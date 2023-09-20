import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

import LogIn from "../../pages/login";
import Index from "../../pages/inicio";
import InfoPacientes from "../../pages/infoPacientes";


import "./header.css";

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="col1">
          <img className="logo" src="src/assets/logoclinicaCES.png" alt="logo" border="0"></img>
          <h1 className="hetitle">Unidad de Cuidados Intensivos</h1>
        </div>
        <div className="pestañas">
          <ul>
          <h1 className="link"><li>
            <Link to="/">Inicio</Link>
          </li></h1>
          <h1 className="link"><li>
            <Link to="/login">Iniciar Sesión</Link>
          </li></h1>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/infopaciente" element={<ProtectedRoutes><InfoPacientes/></ProtectedRoutes>}></Route>
      </Routes>
    </Router>
  );
};

export default Header;