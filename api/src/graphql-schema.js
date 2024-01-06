import { gql } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';

// Leer el esquema GraphQL desde un archivo
const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');
const typeDefs = gql`${schema}`;

export { typeDefs };