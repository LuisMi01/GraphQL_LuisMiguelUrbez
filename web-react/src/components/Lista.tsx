import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define tu consulta GraphQL
const GET_LIBROS = gql`
    query GetLibros {
        libros {
            titulo
        }
    }
`;

// Define una interfaz para los datos de la consulta
interface Libro {
  titulo: string;
}

interface GetLibrosData {
  libros: Libro[]; // Cambia 'Libro' a 'libros'
}

function Libros() {
  // Utiliza el hook useQuery para hacer la consulta
  const { loading, error, data } = useQuery<GetLibrosData>(GET_LIBROS);

  // Muestra un mensaje de carga mientras la consulta está en progreso
  if (loading) return <p>Cargando...</p>;
  // Muestra un mensaje de error si la consulta falla
  if (error) {
    console.error(error);
    return <p>Error</p>;
  }

  // Muestra los libros una vez que la consulta se complete
  return (
    <>
      {data?.libros.map(({ titulo }) => ( // Cambia 'Libro' a 'libros'
        <div key={titulo}>
          <p>{titulo}</p>
        </div>
      ))}
    </>
  );
}

export default Libros;