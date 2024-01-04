import fs from 'fs'
import path from 'path'

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

// Leer el esquema GraphQL desde un archivo
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');
