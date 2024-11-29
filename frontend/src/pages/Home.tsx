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
            <p className='text-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, alias voluptatem placeat inventore architecto sit numquam ab maiores officia iste nam aspernatur quod omnis culpa corporis nostrum temporibus. Ut, eos nihil sequi magnam nisi sit aspernatur, doloremque ullam molestias, consectetur sapiente nesciunt modi hic minima alias aut. Debitis, quas asperiores!</p>
        </div>
    );
};

export default Home;