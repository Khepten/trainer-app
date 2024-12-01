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

/*
// pour récupérer et lire les données clients
// version de test à remplacer par la version de prod après debug
export const getClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/clientlist`);

        // Vérifier si la réponse contient des données
        if (response && response.data && response.data.length > 0) {
            console.log("Données reçues:", response.data); // Afficher les données dans la console
            return response.data; // Retourner les données
        } else {
            console.log("Aucune donnée trouvée");
            return []; // Retourner un tableau vide si aucune donnée n'est trouvée
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
        throw error; // Propager l'erreur
    }
};
*/

/*
export const addClient = async (client) => {
    const response = await axios.post(`${API_URL}/ClientForm`, client);
    return response.data;
};
*/

//

// Définir l'URL de base pour le backend

/**
 * Récupérer la liste des clients depuis le backend.
 * @returns {Promise<Array>} - Une promesse contenant la liste des clients.
 */

/**
 * Ajouter un nouveau client.
 * @param {Object} clientData - Les données du client à ajouter.
 * @returns {Promise<Object>} - Une promesse contenant le client ajouté.
 */

/**
 * Mettre à jour un client existant.
 * @param {number} clientId - L'ID du client à mettre à jour.
 * @param {Object} updatedData - Les nouvelles données du client.
 * @returns {Promise<Object>} - Une promesse contenant le client mis à jour.
 */
/*
export const updateClient = async (clientId, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/clients/${clientId}`, updatedData);
        return response.data; // Retourne le client mis à jour
    } catch (error) {
        console.error('Erreur lors de la mise à jour du client:', error);
        throw error;
    }
};
*/

/**
 * Supprimer un client.
 * @param {number} clientId - L'ID du client à supprimer.
 * @returns {Promise<void>} - Une promesse résolue après suppression.
 */

/*
export const deleteClient = async (clientId) => {
    try {
        await axios.delete(`${BASE_URL}/clients/${clientId}`);
    } catch (error) {
        console.error('Erreur lors de la suppression du client:', error);
        throw error;
    }
};
*/
