import { slide as Menu } from 'react-burger-menu'
import "./burgermenu.css";

const BurgerMenu = () => {
    return (
        <Menu>
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/login">Iniciar Sesión</a>
        </Menu>
    );
};

export default BurgerMenu;
