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
    return <p className='justify-center align-middle bold text-4xl'>Error: No se proporcionó un titulo para la busqueda del libro</p>;
  }
  if (loading) return <p className='justify-center align-middle bold text-4xl'>Cargando...</p>;
  if (error) return <p className='justify-center align-middle bold text-4xl'>Error en la base de datos</p>;
  if (!data || !data.libro) return <p className='justify-center align-middle bold text-4xl'>No se encontró el libro para ser prestado</p>;

  return (
    <div>
      <h2>Libro a ser prestado: {data.libro.titulo}</h2>
      <p>Autor: {data.libro.autor}</p>
      <p>IBAN: {data.libro.iban}</p>
      <p>Disponible: {data.libro.disponible}</p>
    </div>
  );
};
export default DetalleLibro;