'use client'
import './App.css';
import Banner from './components/Banner';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Buscador from './components/Lista'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetalleLibro from './components/DetalleLibro';
import PrestamoLibro from './components/PrestamoLibro'
import LibrosCategoria from './components/LibrosCategorias';
import Categories, { CategoriaContext } from './components/Categories';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


// Crea un cliente Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql', //esto por ahora funciona en local, si quiero usarlo en server hay que cambiarlo
  cache: new InMemoryCache()
});




function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const { nombre } = useParams();

  useEffect(() => {
    if (nombre) {
      setCategoriaSeleccionada(nombre);
    } else {
      setCategoriaSeleccionada('');
    }
  }, [nombre]);

  return (
    <div className="bg-robin-egg-blue min-h-screen">
      <ApolloProvider client={client}>
        <Router>
          <Banner />
          <CategoriaContext.Provider value={{ categoriaSeleccionada, setCategoriaSeleccionada }}>
            <Categories />
          </CategoriaContext.Provider>
          <hr/>
          <Routes>
            <Route path="/libro/:titulo" element={<DetalleLibro />} />
            <Route path="/prestamo/:titulo" element={<PrestamoLibro />} />
            <Route path='/categoria/:nombre' element={<LibrosCategoria />} />
            <Route path="/" element={<Buscador />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;