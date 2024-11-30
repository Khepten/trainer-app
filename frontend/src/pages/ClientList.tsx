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
