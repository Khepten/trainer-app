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

import React, { useEffect, useState } from 'react';
import { getClients } from '../services/clientService';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const data = await getClients();
            setClients(data);
        };
        fetchClients();
    }, []);

    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Liste des clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        {client.name} - {client.age} ans - {client.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientList;