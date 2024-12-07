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
    const [editingClient, setEditingClient] = useState<Client | null>(null); // Etat pour le client en cours d'édition
    const [modalOpen, setModalOpen] = useState(false); // Etat pour gérer l'ouverture/fermeture de la modale
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '' }); // Données du formulaire
    
    useEffect(() => {
        getClients()
            .then(data => {
                setClients(data); // Mettre à jour l'état avec les données récupérées
            })
            .catch(error => {
                console.error('Erreur lors du chargement des clients:', error);
            });
    }, []);

    const handleEdit = (client: Client) => {
        setEditingClient(client);
        setFormData({
            firstname: client.firstname,
            lastname: client.lastname,
            email: client.email,
            phone: client.phone,
        });
        setModalOpen(true); // Ouvre la modale
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Ferme la modale
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingClient) {
            try {
                const response = await fetch(`http://localhost:5000/edit-client/${editingClient.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert('Client mis à jour avec succès.');
                    setClients((prevClients) =>
                        prevClients.map((client) =>
                            client.id === editingClient.id ? { ...client, ...formData } : client
                        )
                    );
                    handleCloseModal(); // Ferme la modale après la soumission
                } else {
                    alert('Erreur lors de la mise à jour du client.');
                }
            } catch (err) {
                console.error('Erreur:', err);
            }
        }
    };

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
                                    <button
                                        onClick={() => handleEdit(client)}
                                        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow-sm transition duration-200"
                                    >
                                        Éditer
                                    </button>
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
            {/* Fenêtre modale d'édition */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Éditer le client</h3>
                        <form onSubmit={handleSubmit}>
                            <label className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={formData.firstname}
                                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                            />
                            <label className="block text-sm font-medium text-gray-700 mt-4">Nom</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={formData.lastname}
                                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                            />
                            <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <label className="block text-sm font-medium text-gray-700 mt-4">Téléphone</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <div className="mt-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow-sm"
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientList;
