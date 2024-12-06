import React, { useState } from 'react';
//import React, { useEffect, useState } from 'react';
import { addClient } from '../services/clientService';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';


function ClientForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ firstname, lastname, email, phone });
        try {
            const response = await fetch('http://localhost:5000/clientform', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname, lastname, email, phone }),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccessMessage(`Client ajouté: ${data.firstname} ${data.lastname}`);
                console.log(data);
                setFirstname('');
                setLastname('');
                setEmail('');
                setPhone('');
            } else {
                console.log('Erreur lors de l\'ajout du client');
            }
        } catch (error) {
            console.error('Erreur:', error);
        };
    };

    return (
        <div>
            <Logo />
            <Navigation />
        <form onSubmit={handleSubmit}>
            <label>
                Prénom:
                <input
                    id="firsname"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </label>
            <br />
            <label>
                Nom:
                <input
                    id="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Téléphone:
                <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Soumettre</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default ClientForm;