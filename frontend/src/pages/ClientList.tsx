import React, { useEffect, useState } from 'react';
import { getClients } from '../services/clientService';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const ClientList = () => {
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
        <div className='min-h-screen bg-gray-100'>
                <Logo />
                <Navigation />
            <main className='max-w-4xl mx-auto py-8 px-4'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Liste des clients</h2>
                {clients.length > 0 ? (
                    <ul className='space-y-4'>
                        {clients.map((client) => (
                            <li key={client.id} className='bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-200'>
                                <div>
                                    <p className='text-lg font-medium text-gray-900'>
                                        {client.firstname} {client.lastname}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        Email: {client.email} | Téléphone: {client.phone}
                                    </p>
                                </div>
                                    {/* {client.id}{client.firstname}{client.lastname}{client.email}{client.phone} */}
                                <p className="text-sm text-gray-400">ID: {client.id}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500 mt-6">Aucun client trouvé.</p>
                )}
            </main>
           
        </div>
    );
};

export default ClientList;
