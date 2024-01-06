import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LIBROS_CATEGORIA } from '../queries/Query';
import TarjetaLibro from '../components/TarjetaLibro';

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

  if (loading) return <p className="flex center justify-center align-middle bold text-4xl">Cargando...</p>;
  if (error) {
    console.error(error);
    return <p className="justify-center align-middle bold text-4xl">Error</p>;
  }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {data?.librosPorCategoria?.map((libro: Libro) => (
            <TarjetaLibro key={libro.iban} libro={libro} link={`/libro/${libro.titulo.replace(/\s/g, '_')}`} />
        ))}
        </div>
  );

}


export default LibrosCategoria;