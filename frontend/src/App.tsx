import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClientList from './pages/ClientList';
import ClientForm from './pages/ClientForm';
import ClientEdit from './pages/ClientEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientlist' element={<ClientList />} />
        <Route path="/clientform" element={<ClientForm />} />
        <Route path="/edit-client/:id" element={<ClientEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;