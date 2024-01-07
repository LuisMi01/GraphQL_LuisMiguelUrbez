import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import TarjetaLibro from './TarjetaLibro';
import { GET_AUTORES, GET_LIBROS } from '../queries/Query';

interface Libro {
  autor: string
  cantidad: string
  categoria: string
  disponible: string
  iban: string
  titulo: string
}
interface Categoria{
  librosPerteneceA: [Libro]
  nombre: string
}

interface GetLibrosData {
  libros: Libro[];
  perteneceACategorias: [Categoria]
  autorsEscritoPor: [Autor]
}

interface Autor{
  nombre: string
  autores: [Autor]
  escritoPorLibros: [Libro]

}


interface GetAutoresData {
  autores: Autor[];
}


function ListaAutores() {
  const { loading, error, data } = useQuery<GetAutoresData>(GET_AUTORES);
  const [autorSeleccionado, setAutorSeleccionado] = useState<string | null>(null);

  if (loading) return <p className="flex center justify-center align-middle bold text-4xl">Cargando...</p>;
  if (error) {
    console.error(error);
    return <p className="flex center justify-center align-middle bold text-4xl">Error</p>;
  }

  return (
    <div>
      <ul>
        {data?.autores.map((autor, index) => (
          <li key={index}>
            <button onClick={() => setAutorSeleccionado(autorSeleccionado === autor.nombre ? null : autor.nombre)}>
              {autor.nombre}
            </button>
            {autorSeleccionado === autor.nombre && autor.escritoPorLibros.map((libro) => (
              <TarjetaLibro key={libro.titulo} libro={libro} link={`/libro/${libro.titulo.replace(/\s/g, '_')}`} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Buscador() {
  const [opcion, setOpcion] = useState('libros');

  return (
    <div>
      <button onClick={() => setOpcion('libros')}>Buscar por libros</button>
      <button onClick={() => setOpcion('autores')}>Buscar por autores</button>
      {opcion === 'libros' ? <Libros /> : <ListaAutores />}
    </div>
  );
}

function Libros() {
  const { loading, error, data, refetch } = useQuery<GetLibrosData>(GET_LIBROS);
  useEffect(() => {
    refetch();
  }, [refetch]);
  
  if (loading) return <p className="flex center justify-center align-middle bold text-4xl">Cargando...</p>;
  if (error) {
    console.error(error);
    return <p className="flex center justify-center align-middle bold text-4xl">Error</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
      {data?.libros.map((libro) => (
        <TarjetaLibro key={libro.titulo} libro={libro} link={`/libro/${libro.titulo.replace(/\s/g, '_')}`} />
      ))}
    </div>
  );
}


export default Buscador;