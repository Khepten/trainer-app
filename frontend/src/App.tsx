import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClientList from './pages/ClientList';
//import ClientForm from './pages/ClientForm';

// Exemple de source de data : https://restcountries.com/v3.1/all

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientlist' element={<ClientList />} />
        {/* <Route path="/add-client" element={<ClientForm />} /> */}
        {/* <Route path="/edit-client/:id" element={<ClientForm />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;