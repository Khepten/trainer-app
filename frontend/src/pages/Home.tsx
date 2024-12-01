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
            <p className='text-blue-500'>Salut je viens de changer le texte</p>
            	<p>je rajoute du texte</p>
        </div>
    );
};

export default Home;