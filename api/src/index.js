import { typeDefs } from './graphql-schema'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import neo4j from 'neo4j-driver'
import dotenv from 'dotenv'


// set environment variables from .env
dotenv.config()
const bcrypt = require('bcrypt');
const app = express()
const Usuario = require('./models/Usuario'); 

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
      const query = 'MATCH (a:Autor)-[:ESCRITO_POR]->(l:Libro) RETURN a, collect(l) as libros';
      const result = await session.run(query);
      session.close();
      return result.records.map(record => {
        const autor = record.get('a').properties;
        const libros = record.get('libros').map(libro => libro.properties);
        return {
          ...autor,
          escritoPorLibros: libros,
        };
      });
    },
  },

  Mutation: {
    registrarUsuario: async (_, { nombre, email, contrasena, rol }, { models }) => {
      console.log("Iniciar mutación registrarUsuario");
      console.log("Argumentos:", { nombre, email, contrasena, rol });
  
      // Encriptar la contraseña
      const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);
      console.log("Contraseña encriptada:", contrasenaEncriptada);
  
      // Imprimir los datos en la consola
      console.log({
        nombre,
        email,
        contrasena,
        rol
      });
  
      // Crear el nuevo usuario
      const usuario = await models.Usuario.create({
        nombre,
        email,
        contrasena: contrasenaEncriptada,
        rol
      });
  
      return usuario;
    },
    iniciarSesion: async (_parent, { email, contrasena }, { models }) => {
      console.log("Iniciar mutación iniciarSesion");
      console.log("Argumentos:", { email, contrasena });
    
      // Verificar el usuario y la contraseña
      const usuario = await models.Usuario.verificarContrasena(email, contrasena);
    
      if (!usuario) {
        throw new Error('No existe un usuario con ese correo electrónico y contraseña' + email + contrasena);
      }
    
      return usuario;
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
      models: {
        Usuario: new Usuario(driver) 
      }
    },
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

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