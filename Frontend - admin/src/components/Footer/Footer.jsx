import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footercont">
        <div className='footercolumns'>
            <div className='footerlogo'>
                <img src="src/assets/Logovertical_fondoazul.jpg" width={200} height={200} />
            </div>
            <div className='footercolumn2'>
                <p>Preguntas frecuentes</p>
                <p>Transparencia</p>
                <p>Dónde estamos</p>
                <p>Políticas institucionales</p>
            </div>
            <div className='footercolumn3'>
                <h2>Citas</h2>
                <p>(640)3229301</p>
                <p>citas@clinicaces.edu.co</p>
            </div>
        </div>
        <div className='footerbottom'>
            <p>© 2021 Clínica CES. Todos los derechos reservados.</p>
            <p>Clínica CES es propiedad de la Corporación para Estudios en Salud - Clínica CES</p>
        </div>
    </div>
  );
};

export default Footer;