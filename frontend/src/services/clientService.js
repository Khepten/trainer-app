import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Fonction pour lister les clients
export const getClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/clientlist`);
        return response.data; // Retourne les données obtenues
    } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
        throw error; // Relance l'erreur pour la gérer côté frontend
    }
};

// Fonction pour ajouter un client
export const addClient = async (clientData) => {
    try {
        const response = await axios.post(`${BASE_URL}/clientform`, clientData);
        return response.data; // Retourne le client ajouté
    } catch (error) {
        console.error("Erreur lors de l'ajout d'un client:", error);
        throw error;
    }
};

// Fonction pour éditer un client
export const updateClient = async (id, clientData) => {
    try {
        const response = await fetch(`${BASE_URL}/edit-client/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(clientData),
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la mise à jour du client");
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur dans updateClient:", error);
        throw error;
    }
};

//Fonction pour supprimer un client
// Supprimer un client
export const deleteClient = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/delete-client/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la suppression du client");
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur dans deleteClient:", error);
        throw error;
    }
};
