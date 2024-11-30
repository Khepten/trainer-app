import React, { useEffect, useState } from 'react';
import { getClients } from '../services/clientService';
//import { getClients } from './clientService';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const ClientList = () => {
    //const [clients, setClients] = useState([]);
    interface Client {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
    }
    const [clients, setClients] = useState<Client[]>([]);
    
    useEffect(() => {
        getClients()
            .then(data => {
                setClients(data); // Mettre à jour l'état avec les données récupérées
            })
            .catch(error => {
                console.error('Erreur lors du chargement des clients:', error);
            });
    }, []);
    
    return (
        <div>
            <Logo />
            <Navigation />
            <h2>Liste des clients</h2>
            {clients.length > 0 ? (
                <ul>
                    {clients.map((client) => (
                        //<li key={client.id}>{client.firstname}</li>
                        <li key={client.id}>{client.id}{client.firstname}{client.lastname}{client.email}{client.phone}</li>
                    ))}
                </ul>
            ) : (
                <p>Aucun client trouvé.</p>
            )}
        </div>
    );
};

export default ClientList;



/* Avant gestion de la liaison avec pg

import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const ClientList = () => {
    const clients = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 28 },
    ];
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>La liste de clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        {client.name} - {client.age} ans
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
*/

