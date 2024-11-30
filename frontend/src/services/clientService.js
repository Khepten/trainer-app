import axios from "axios";

const API_URL = "http://localhost:5000"; // URL de votre backend

export const getClients = async () => {
    const response = await axios.get(`${API_URL}/clientlist`);
    return response.data;
};

export const addClient = async (client) => {
    const response = await axios.post(`${API_URL}/clientlist`, client);
    return response.data;
};
