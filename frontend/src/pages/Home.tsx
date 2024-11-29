import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>Accueil</h1>
            <p>Le message d'accueil</p>
        </div>
    );
};

export default Home;