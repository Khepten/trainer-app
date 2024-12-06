import React, { useEffect, useState } from 'react';
import { getClients } from '../services/clientService';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

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

    // Ajout de la logique de suppression :
    const handleDelete = async (id: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
            try {
                const response = await fetch(`http://localhost:5000/delete-client/${id}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    alert("Client supprimé avec succès.");
                    // Mettre à jour la liste localement après suppression
                    setClients((prevClients) => prevClients.filter((client) => client.id !== id));
                } else {
                    alert("Erreur lors de la suppression du client.");
                }
            } catch (err) {
                console.error("Erreur lors de la suppression :", err);
            }
        }
    };

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
                                    <p className="text-sm text-gray-400">ID: {client.id}</p>
                                </div>
                                <div>
                                    <Link
                                        to={`/edit-client/${client.id}`}
                                        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow-sm transition duration-200"
                                    >
                                        Éditer
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(client.id)}
                                        className='text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md shadow-sm transition duration-200'
                                    >
                                        Supprimer
                                    </button>
                                </div>
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
