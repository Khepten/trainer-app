import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const ClientEdit = () => {
    const { id } = useParams<{ id: string }>(); // Récupérer l'id depuis l'URL
    const navigate = useNavigate();

    const [client, setClient] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    // Charger les données du client
    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await fetch(`http://localhost:5000/edit-client/${id}`);
                if (!response.ok) {
                    throw new Error('Client introuvable');
                }
                const data = await response.json();
                setClient(data);
                setLoading(false);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Erreur inconnue lors du chargement des données');
                }
                setLoading(false);
            }
        };
    
        fetchClient();
    }, [id]);


    // Gestion des modifications dans les champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    if (loading) return <p>Chargement des données...</p>;
    if (error) return <p>Erreur : {error}</p>;


   // Gestion de la soumission du formulaire
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/edit-client/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(client),
        });

        if (response.ok) {
            alert('Client mis à jour avec succès.');
            navigate('/clients'); // Redirige vers la liste des clients
        } else {
            throw new Error('Erreur lors de la mise à jour du client');
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message || 'Erreur lors de la mise à jour');
        } else {
            setError('Erreur inconnue lors de la mise à jour');
        }
    }
};


    return (
        <div className='max-w-lg mx-auto bg-white shadow-md rounded-md p-6 mt-10'>
            <Logo />
            <Navigation />
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Modifier un client
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                    Prénom
                </label>
                <input
                    type="text"
                    name="firstname"
                    value={client.firstname}
                    onChange={handleChange} 
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Entrez le prénom"
                    />
                <br />
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Nom
                </label>
                    <input
                        type="text"
                        name="lastname"
                        value={client.lastname}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Entrez le nom"
                    />
                <br />
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                    <input
                        type="email"
                        name="email"
                        value={client.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Entrez l'email"
                    />
                <br />
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                </label>
                    <input
                        type="text"
                        name="phone"
                        value={client.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Entrez le numéro de téléphone"
                    />
                <br />
                <button 
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    Mettre à jour
                </button>
            </form>
            
        </div>
        
    );
};

export default ClientEdit;