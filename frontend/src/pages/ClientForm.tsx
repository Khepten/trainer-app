//   Code par défaut
import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const ClientList = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Edition d'un client</h1>
        </div>
    );
};

export default ClientList;


// Code chatGPT
/*
import React, { useState } from 'react';

function ClientForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let e = null

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, age });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Âge :
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <button type="submit">Sauvegarder</button>
        </form>
    );
}
*/
