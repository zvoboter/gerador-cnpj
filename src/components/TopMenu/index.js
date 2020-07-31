import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './style.css';

function TopMenu() {
    const { pathname } = useLocation();

    const isActive = () => {
        return ['/cnpj', '/'].includes(pathname);
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/cnpj" isActive={isActive} className="link" activeClassName="selected">CNPJ</NavLink>
                </li>
                <li>
                    <NavLink to="/validatecnpj" className="link" activeClassName="selected">Validador de CNPJ</NavLink>
                </li>
                <li>
                    <NavLink to="/rut" className="link" activeClassName="selected">RUT</NavLink>
                </li>
                <li>
                    <NavLink to="/hash" className="link" activeClassName="selected">Hash</NavLink>
                </li>
                <li>
                    <NavLink to="/characterCounter" className="link" activeClassName="selected">Contador de caracteres</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default TopMenu;