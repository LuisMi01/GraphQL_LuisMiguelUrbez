import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_LIBRO_DETALLE = gql`
    query GetLibroDetalle($titulo: String!) {
        libro(titulo: $titulo) {
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

interface GetLibroDetalleData {
  libro: Libro;
}

const DetalleLibro = () => {
  let { titulo } = useParams<{ titulo?: string }>();
  titulo = titulo ? titulo.replace(/_/g, ' ') : '';
  const { loading, error, data } = useQuery<GetLibroDetalleData>(GET_LIBRO_DETALLE, {
    variables: { titulo },
    skip: !titulo,
  });

  if (!titulo) {
    return <p>Error: No se proporcionó un titulo para la busqueda del libro</p>;
  }
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.libro) return <p>No se encontró el libro</p>;

  return (
    <div>
      <h2>{data.libro.titulo}</h2>
      <p>Autor: {data.libro.autor}</p>
      <p>IBAN: {data.libro.iban}</p>
      <p>Disponible: {data.libro.disponible}</p>
    </div>
  );
};
export default DetalleLibro;