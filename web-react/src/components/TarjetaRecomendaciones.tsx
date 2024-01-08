import React from 'react';
import { useQuery } from '@apollo/client';
import { LIBROS_RECOMENDADOS } from '../queries/Query';

interface Props {
  categoria: string;
  idLibroActual: string;
}

const TarjetaRecomendaciones: React.FC<Props> = ({ categoria, idLibroActual }) => {
  const { loading, error, data } = useQuery(LIBROS_RECOMENDADOS, {
    variables: { nombre: categoria },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Obtén los primeros 10 libros que no sean el libro actual
  const librosRecomendados = data.librosRecomendados
    .filter((libro: any) => libro.id !== idLibroActual)
    .slice(0, 10);

  return (
    <div className='flex gap-2'>
      {librosRecomendados.map((libro: any) => (
        <div key={libro.id} className="rounded-xl bg-white p-2 m-3">
          <div className="card-body">
            <h5 className="font-bold">{libro.titulo}</h5>
            <h6 className="mb-2 text-muted">{libro.autor}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaRecomendaciones;