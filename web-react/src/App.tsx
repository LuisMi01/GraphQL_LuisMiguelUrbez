import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Libros from './components/Lista'


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
        <div>
          <Libros />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;