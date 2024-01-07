import { typeDefs } from './graphql-schema'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import neo4j from 'neo4j-driver'
import dotenv from 'dotenv'


// set environment variables from .env
dotenv.config()

const app = express()

/*
 * Create a Neo4j driver instance to connect to the database
 * using credentials specified as environment variables
 * with fallback to defaults
 */
const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
)


const resolvers = {
  Query: {
    libro: async (_parent, args, context, _info) => {
      const session = context.driver.session();
      const { titulo } = args;
      const query = 'MATCH (l:Libro { titulo: $titulo }) RETURN l';
      const result = await session.run(query, { titulo });
      session.close();
      return result.records[0].get('l').properties;
    },
    libros: async (_parent, _args, context, _info) => {
      const session = context.driver.session();
      const query = 'MATCH (l:Libro) RETURN l';
      const result = await session.run(query);
      session.close();
      return result.records.map(record => record.get('l').properties);
    },
    librosPorCategoria: async (_parent, args, context, _info) => {
      const session = context.driver.session();
      const { nombre } = args;
      const query = 'MATCH (l:Libro)-[:PERTENECE_A]->(:Categoria { nombre: $nombre }) RETURN l';
      const result = await session.run(query, { nombre });
      session.close();
      return result.records.map(record => record.get('l').properties);
    },
    autores: async (_parent, _args, context, _info) => {
      const session = context.driver.session();
      const query = 'MATCH (a:Autor) RETURN a';
      const result = await session.run(query);
      session.close();
      return result.records.map(record => record.get('a').properties);
    },
  },
};

/*
 * Create a new ApolloServer instance, serving the GraphQL schema
 * created using makeAugmentedSchema above and injecting the Neo4j driver
 * instance into the context object so it is available in the
 * generated resolvers to connect to the database.
 */

(async () => {

  const server = new ApolloServer({
    context: {
      driver,
      driverConfig: { database: process.env.NEO4J_DATABASE || 'neo4j' },
    },
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  })

  /*
  const server = new ApolloServer({
    context: {
      driver: neo4j.driver(
        process.env.NEO4J_URI || 'bolt://localhost:7687',
        neo4j.auth.basic(
          process.env.NEO4J_USER || 'neo4j',
          process.env.NEO4J_PASSWORD || 'neo4j'
        )
      ),
      driverConfig: { database: process.env.NEO4J_DATABASE || 'neo4j' },
    },
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
  
  const handler = server.createHandler({ path: '/api/graphql' });

  app.use('/api/graphql', microHandler(handler));
  
  export default app;*/
  
  const port = process.env.GRAPHQL_SERVER_PORT || 4001
  const path = process.env.GRAPHQL_SERVER_PATH || '/graphql'
  const host = process.env.GRAPHQL_SERVER_HOST || 'localhost'


  await server.start()

  server.applyMiddleware({ app, path })

  app.listen({ host, port, path }, () => {
    console.log(`Servidor de GraphQL listo en: http://${host}:${port}${path}`)
  })

})()