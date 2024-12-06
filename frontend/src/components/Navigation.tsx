import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='bg-blue-600 shadow-md'>
            <div className='container mx-auto px-4'>
                <ul className='flex justify-center space-x-6 py-4'>
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-semibold border-b-2 border-white"
                                : "text-blue-200 hover:text-white"
                            }
                    >
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink 
                        to="/clientlist"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-semibold border-b-2 border-white"
                                : "text-blue-200 hover:text-white"
                        }
                    >
                        <li>Clients</li>
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-semibold border-b-2 border-white"
                                : "text-blue-200 hover:text-white"
                        }    
                    >
                        <li>A propos</li>
                    </NavLink>
                    
                    <NavLink 
                        to="/clientform"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-semibold border-b-2 border-white"
                                : "text-blue-200 hover:text-white"
                        }
                    >
                        <li>Ajout d'un client</li>
                    </NavLink>
                    <NavLink 
                        to="/edit-client/${id}"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-semibold border-b-2 border-white"
                                : "text-blue-200 hover:text-white"
                        }
                    >
                        <li>Editer un client</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
        
    );
};

export default Navigation;