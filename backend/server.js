const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurer la connexion PostgreSQL
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Route pour récupérer tous les clients
app.get("/clientlist", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM clients");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erreur serveur");
    }
});

// Route pour ajouter un client
app.post("/clientform", async (req, res) => {
    console.log("Corps de la requête :", req.body);
    res.json({ message: "Retu" });
    try {
        const { firstname, lastname, email, phone } = req.body;
        const result = await pool.query(
            `INSERT INTO clients (firstname, lastname, email, phone) VALUES ($1, $2, $3, $4) RETURNING *`,
            [firstname, lastname, email, phone]
        );
        res.status(201).json({
            message: "Client ajouté avec succès",
            client: result.rows[0],
        });
        //res.status(201).json(result.rows[0]);
        //res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message + "testnd");
        res.status(500).send("Erreur serveur nd");
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
