# trainer-app

0. Prompt de départ
I'd like to create an app for trainers to manage their client pool. Specifically for independant trainers, working in presential or online, allowing them to create clients record, keep track of their personalized training program, but also for thir client to send input like their progress, weight loss, etc. Can you elaborate on the list of features and create complete specs for this web app project?

2. creation of the public repository on github
   repository name : trainer-app
   public
   .gitignore : node
   Licence : MIT

3. récupération du répository en local
   git clone git@github.com:Khepten/trainer-app.git

4. installer react
   npx create-react-app frontend --template typescript

5. Nettoyage de l'installation
   nettoyage du fichier index.html
   suppression des fichiers
     /public/logo512.png
     /public/manifest.json
     /src/App.css
     /src/App.test.tsx
     /src/Index.css
     /src/logo.svg
     /src/react-app-env.d.ts
     /src/reportWebVitals.ts
     /src/setupTests.ts
   dans le fichier index.tsx
     supprimer la ligne "import './index.css';"
     supprimer la ligne "import reportWebVitals from './reportWebVitals';"
     supprimer le bloc suivant :
       // If you want to start measuring performance in your app, pass a function
       // to log results (for example: reportWebVitals(console.log))
       // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
       reportWebVitals();
   dans le fichier App.tsx : vider le fichier complètement

6. Fichier App.tsx
Le code ci-dessous permet de tester l'app pour vérifier que la page d'accueil affiche bien un titre
import React from 'react';
const App = () => {
  return (
    <div>
      <h1>Test d'ouverture d'une page</h1>
    </div>
  );
};
export default App;

7. démarrer le moteur react en se plaçant dans le dossier frontend : npm start
la page doit être blanche avec un titre tout simple : Test d'ouverture d'une page

8. Installation de react-router-dom pour gérer les routes
   en se plaçant dans le dossier router : npm i -s react-router-dom

9. Mise à jour de l'arborescence du dossier src : 
src/
├── assets              # Ensemble des media, polices, ...
    ├── fonts/
    ├── img/
├── components/         # Composants réutilisables
    ├── Navigation.tsx
    ├── Logo.tsx
├── pages/              # Pages principales
    ├── Home.tsx
    ├── About.tsx
├── services/           # Requêtes API ou logique métier
├── App.js              # Point d’entrée de l’app
├── index.js            # Fichier principal
└── styles/   

10. Création de la page Home.tsx avec un rsc dessus
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

11. Création de la page About.tsx avec un rsc dessus
import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <p>test de texte</p>
        </div>
    );
};

export default About;

12. Création du composant Navigation.tsx avec un rsc + NavLink
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;

13. Création du composant Logo.tsx avec un rsc dessus
import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            <img src="logo192.png" alt="Logo de mon app" />
            <h2>My world</h2>
        </div>
    );
};

export default Logo;

14. Rappel de la page App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

15. Rappel de la page Index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


Fin de la première partie
Site fonctionnel avec React 
A partir de maintenant
Ajouter une couche de graphisme
Ajouter une logique métier
