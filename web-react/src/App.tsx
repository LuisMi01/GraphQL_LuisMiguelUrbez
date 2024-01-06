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
  uri: 'http://localhost:4001/graphql', //esto por ahora funciona, no se si deberia cambiarlo por la uri de neo4j
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="bg-robin-egg-blue min-h-screen">
      <ApolloProvider client={client}>
        <Router>
          <Banner />
          <Categories />
          <hr/>
          <Routes>
            <Route path="/libro/:titulo" element={<DetalleLibro />} />
            <Route path="/prestamo/:titulo" element={<PrestamoLibro />} />
            <Route path='/categoria/:nombre' element={<LibrosCategoria />} />
            <Route path="/" element={<Libros />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;