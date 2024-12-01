import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/clientlist">
                    <li>Liste des clients</li>
                </NavLink>
                <NavLink to="/clientform">
                    <li>Ajout d'un client</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;