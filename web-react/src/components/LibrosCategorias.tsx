import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LIBROS_CATEGORIA } from '../queries/Query';
import TarjetaLibro from './TarjetaLibro';

interface Libro {
    id: string;
    titulo: string;
    autor: string;
    iban: string;
    disponible: string;
}

function LibrosCategoria() {
    const { nombre } = useParams<{ nombre: string }>();
    const { loading, error, data } = useQuery(GET_LIBROS_CATEGORIA, {
    variables: { nombre },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

    return (
        <div>
        {data?.librosPorCategoria?.map((libro: Libro) => (
            <TarjetaLibro key={libro.iban} libro={libro} link={`/libro/${libro.titulo.replace(/\s/g, '_')}`} />
        ))}
        </div>
  );

}


export default LibrosCategoria;