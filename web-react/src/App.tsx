'use client'
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Libros from './components/Lista'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetalleLibro from './components/DetalleLibro';
import PrestamoLibro from './components/PrestamoLibro'
import LibrosCategoria from './components/LibrosCategorias';

// Crea un cliente Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql', 
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
            <Route path="/prestamo/:titulo" element={<PrestamoLibro />} />
            <Route path="/" element={<Libros />} />
            <Route path='/categoria/:nombre' element={<LibrosCategoria />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;