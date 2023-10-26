import { slide as Menu } from 'react-burger-menu'
import "./burgermenu.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

const BurgerMenu = () => {
    return (
        <Menu>
            
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/login">Iniciar Sesión</a>
        </Menu>
    );
};

export default BurgerMenu;
