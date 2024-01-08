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
    <div className="min-h-screen border-b-3 border-gray-200">
      <ul>
        {data?.autores.map((autor, index) => (
          <li key={index} className="my-4 text-left flex justify-between items-center">
            <button className="text-2xl ml-6 mr-6 font-bold w-full" onClick={() => setAutorSeleccionado(autorSeleccionado === autor.nombre ? null : autor.nombre)}>
              <div className="flex justify-between border-b-2 border-white">
                <span>{autor.nombre}</span>
                <span className={`transition-transform duration-200 ease-in-out transform ${autorSeleccionado === autor.nombre ? 'rotate-90' : ''}`}>{'►'}</span>
              </div>
              {autorSeleccionado === autor.nombre && 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-2">
                  {autor.escritoPorLibros.map((libro) => (
                    <TarjetaLibro key={libro.titulo} libro={libro} link={`/libro/${libro.titulo.replace(/\s/g, '_')}`} />
                  ))}
                </div>
              }
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Buscador() {
  const [opcion, setOpcion] = useState('libros');

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex justify-between">
        <div className=" m-3 w-full transition-all duration-200 ease-in-out transform hover:scale-105">
          <button className="w-full bg-orange-400 text-white p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer" onClick={() => setOpcion('libros')}>Lista de todos los libros</button>
        </div>
        <div className=" m-3 w-full transition-all duration-200 ease-in-out transform hover:scale-105">
          <button className="w-full bg-purple-500 text-white p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer" onClick={() => setOpcion('autores')}>Busca tu libro por su autor</button>
        </div >
      </div>
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