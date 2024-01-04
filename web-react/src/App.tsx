import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Libros from './components/Lista'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetalleLibro from './components/DetalleLibro';
import PrestamoLibro from './components/PrestamoLibro'

// Crea un cliente Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql', // reemplaza esto con la URL de tu servidor GraphQL
  cache: new InMemoryCache()
});


function App() {

  return (
    <div className="bg-robin-egg-blue min-h-screen">
      <Banner />
      <Categories />
      <hr/>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/libro/:titulo" element={<DetalleLibro />} />
            <Route path="/prestamo/:iban" element={<PrestamoLibro />} />
            <Route path="/" element={<Libros />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;