import React from 'react';
import { Link } from 'react-router-dom';

interface Libro {
  titulo: string;
  autor: string;
  iban: string;
  disponible: string;
}

interface TarjetaLibroProps {
  libro: Libro;
  link: string;
}



function TarjetaLibro({ libro, link }: TarjetaLibroProps) {
  return (
    <div className="m-4 transition-all duration-200 ease-in-out transform hover:scale-105">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-70 h-80 flex flex-col">
        <div className="px-6 py-4 flex-grow flex flex-col justify-between">
          <div>
            <div className="font-bold text-lg mb-2">{libro.titulo}</div>
            <hr />
            <p className="text-gray-700 text-base">{libro.autor}</p>
            <p className="text-gray-700 text-base">{libro.iban}</p>
            <p className="text-gray-700 text-base">{libro.disponible}
              <span 
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: libro.disponible === 'Disponible' ? 'green' : 'red',
                  marginLeft: '5px',
                }}
              />
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to={`/libro/${libro.titulo}`} className="transition-all duration-200 ease-in-out transform hover:scale-105">
              <button
                className="w-full bg-blue-500 text-white p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer">Más información
              </button>
            </Link>
            <Link to={`/prestamo/${libro.titulo}`} className="transition-all duration-200 ease-in-out transform hover:scale-105">
            <button
              className="w-full bg-green-500 text-white p-2 rounded shadow-md hover:shadow-xl transition cursor-pointer">Pedir prestamo
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarjetaLibro;