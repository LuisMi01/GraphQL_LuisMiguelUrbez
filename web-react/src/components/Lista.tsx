import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TarjetaLibro from './TarjetaLibro';
import { useParams } from 'react-router-dom'

const GET_ALL_LIBROS = gql`
    query GetAllLibros {
        libros {
            titulo
            autor
            iban
            disponible
        }
    }
`;

const GET_LIBROS_BY_CATEGORIA = gql`
    query GetLibrosByCategoria($categoria: String!) {
        Categoria(nombre: $categoria) {
            nombre
            libros {
                titulo
                autor
                iban
                disponible
            }
        }
    }
`;
interface Libro {
  titulo: string;
  autor: string;
  iban: string;
  disponible: string;
}

interface Categoria {
  nombre: string;
  libros: Libro[];
}

interface GetLibrosData {
  Categoria: Categoria;
}

function Libros() {
  const { categoria } = useParams<{ categoria?: string }>();
  const query = categoria ? GET_LIBROS_BY_CATEGORIA : GET_ALL_LIBROS;
  const variables = categoria ? { categoria } : undefined;
  const { loading, error, data } = useQuery(query, { variables });

  if (loading) return <p className="justify-center align-middle bold text-4xl">Cargando...</p>;
  if (error) {
    console.error(error);
    return <p className=" justify-center align-middle bold text-4xl">Error</p>;
  }

  const libros = categoria ? data.Categoria.libros : data.libros;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
      {libros.map((libro: Libro) => (
        <TarjetaLibro key={libro.iban} libro={libro} />
      ))}
    </div>
  );
}

export default Libros;