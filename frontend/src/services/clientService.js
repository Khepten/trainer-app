import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/clientlist`);
        return response.data; // Retourne les données obtenues
    } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
        throw error; // Relance l'erreur pour la gérer côté frontend
    }
};

export const addClient = async (clientData) => {
    try {
        const response = await axios.post(`${BASE_URL}/clientform`, clientData);
        return response.data; // Retourne le client ajouté
    } catch (error) {
        console.error("Erreur lors de l'ajout d'un client:", error);
        throw error;
    }
};
