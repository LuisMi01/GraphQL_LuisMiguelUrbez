'use client'
import { useParams, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_LIBRO_DETALLE = gql`
    query GetLibroDetalle($titulo: String!) {
        libro(titulo: $titulo) {
            titulo
            autor
            iban
            disponible
            categoria
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

function PrestamoLibro() {
  let { titulo } = useParams();
  const { loading, error, data } = useQuery<GetLibroDetalleData>(GET_LIBRO_DETALLE, {
    variables: { titulo },
    skip: !titulo,
  });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  if (!titulo) {
    return <p className='flex center justify-center bold text-4xl'>Error: No se proporcionó un titulo para la busqueda del libro</p>;
  }
  if (loading) return <p className='flex center justify-center bold text-4xl'>Cargando...</p>;
  if (error) return <p className='flex center justify-center align-middle bold text-4xl'>Error en la base de datos</p>;
  if (!data || !data.libro) return <p className='flex center justify-center align-middle bold text-4xl'>No se encontró el libro</p>;

  return (
    <div className="flex flex-col items-center m-3 ">
      <div className="bg-white rounded-lg shadow p-6 w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">{data.libro.titulo}</h1>
        <hr className="mb-4"/>
        <div className='text-center'>
          <p className="text-xl mb-2 font-bold">Autor</p>
          <p className="text-xl mb-2"> {data.libro.autor}</p>
          <p className="text-xl mb-2 font-bold">ISBN</p>
          <p className="text-xl mb-2">{data.libro.iban}</p>
          <p className='text-xl mb-2 font-bold'>Disposición:</p>
          <p className="text-xl mb-4">
             {data.libro.disponible}
            <span 
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: data.libro.disponible === 'Disponible' ? 'green' : 'red',
                marginLeft: '5px',
              }}
            />
          </p>
        </div>
      </div>

      <div className="mt-4 w-full flex justify-center">
      <Link to="/" className="mr-4 bg-blue-500 hover:bg-blue-700 text-center shadow-lg transition cursor-pointer text-white font-bold py-2 px-4 rounded-lg w-full">
          Volver a la página principal
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow p-6 w-full mt-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Solicitar préstamo</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="startDate" className="block mb-2 text-sm font-bold text-gray-700">
              Fecha de inicio
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block mb-2 text-sm font-bold text-gray-700">
              Fecha de fin
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full">
            Solicitar préstamo
          </button>
        </form>
      </div>

    </div>
  );
};

export default PrestamoLibro;