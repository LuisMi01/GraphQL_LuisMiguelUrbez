import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import TarjetaLibro from './TarjetaLibro';

const GET_LIBROS = gql`
    query GetLibros {
        libros {
            titulo
            autor
            iban
            disponible
        }
    }
`;

interface Libro {
  titulo: string;
  autor: string;
  iban: string;
  disponible: string;
}

interface GetLibrosData {
  libros: Libro[];
}

function Libros() {
  const { loading, error, data, refetch } = useQuery<GetLibrosData>(GET_LIBROS);
  useEffect(() => {
    refetch();
  }, [refetch]);
  
  if (loading) return <p className="flex center justify-center align-middle bold text-4xl">Cargando...</p>;
  if (error) {
    console.error(error);
    return <p className="justify-center align-middle bold text-4xl">Error</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
      {data?.libros.map((libro) => (
        <TarjetaLibro key={libro.titulo} libro={libro} link={`/libro/${libro.titulo.replace(/\s/g, '_')}`} />
      ))}
    </div>
  );
}

export default Libros;