# Ejercicio programacion concurrente con GraphQL de Luis Miguel Urbez

**La explicación mas detallada del proyecto puede encontrarse en la documentacion .pdf que hay en la raiz del mismo, para entenderlo no dudes en comprobarla y leerla**
<hr/>
## Paginas de interés

**Toda la información relacionada con la base de datos, al igual que la explicación de la inicialización de la misma se encuentra en el archivo situado en la raiz del proyecto llamado "Creación de Neo4j.md"**
<hr/>
**Para inicializar este proyecto se ha usado GRANDstack, todo se puede encontrar en el siguiente repositorio**
https://github.com/grand-stack/grand-stack-starter

**La mayoria de la informacion y documentacion ha sido adquirida aqui (sobretodo para la inicializacion y entendimiento del framework trabajado)**
https://graphqleditor.com/blog/grandstack/

**Toda la información para conocer Apollo Client**
https://www.apollographql.com/docs/react/get-started

# Sistema de Administración de Biblioteca en Línea con GraphQL y Programación Concurrente

Este proyecto tiene como objetivo diseñar y desarrollar un sistema de administración de biblioteca en línea utilizando GraphQL y técnicas de programación concurrente.Este sistema permitirá a los usuarios buscar libros, autores y categorías de libros. Además, los usuarios podrán hacer reservas y pedir prestados libros electrónicamente. Los administradores podrán agregar, editar y eliminar libros, autores y categorías.

## Funcionalidades Implementadas

### 1. Buscar Libros

- Los usuarios pueden buscar libros por título, autor o categoría utilizando consultas GraphQL.
- El sistema responde a estas consultas obteniendo datos de la base de datos mediante GraphQL.

### 2. Gestionar Reservas y Préstamos

- Los usuarios pueden hacer reservas y pedir prestados libros electrónicamente.
- Se utiliza programación concurrente para manejar eficientemente múltiples solicitudes.

### 3. Gestionar Libros, Autores y Categorías

- Los administradores pueden agregar, editar y eliminar libros, autores y categorías.
- Mutaciones de GraphQL se utilizan para realizar estas operaciones en la base de datos.

### 4. Interfaz de Usuario

- Se proporciona una interfaz de usuario fácil de usar para que tanto usuarios como administradores interactúen con el sistema.

### 5. Pruebas

- Se implementan pruebas que cubren consultas y mutaciones de GraphQL.
- Las pruebas abarcan la lógica de programación concurrente y la funcionalidad de la interfaz de usuario.

## Rúbrica del Ejercicio

### Implementación de consultas de GraphQL (30%)

La aplicación debe utilizar correctamente GraphQL para realizar consultas a la base de datos. Cada consulta debe devolver los datos esperados y manejar adecuadamente los errores.

### Implementación de mutaciones de GraphQL (20%)

La aplicación debe utilizar correctamente GraphQL para realizar mutaciones en la base de datos. Cada mutación debe modificar los datos como se esperaba y manejar adecuadamente los errores.

### Uso de la programación concurrente (20%)

La aplicación debe utilizar programación concurrente para manejar múltiples solicitudes de manera eficiente. Debe demostrar que la programación concurrente mejora la eficiencia de la aplicación.

### Interfaz de usuario (10%)

La interfaz de usuario debe ser fácil de usar y permitir a los usuarios y administradores interactuar con la aplicación. Debe implementar correctamente todas las funcionalidades requeridas.

### Pruebas (20%)

Se deben implementar pruebas que cubran todas las funcionalidades de la aplicación. Las pruebas deben ser completas y pasar correctamente.

La nota final se calculará según estos criterios y se proporcionará un feedback detallado en cada uno de ellos.
