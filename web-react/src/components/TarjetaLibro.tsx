import React from 'react';

interface Libro {
  titulo: string;
  autor: string;
  iban: string;
  disponible: string;
}


function TarjetaLibro({ libro }: { libro: Libro }) {
  return (
    <div className="m-4 transition-all duration-200 ease-in-out transform hover:scale-105">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-70 h-80 flex flex-col">
        <div className="px-6 py-4 flex-grow flex flex-col justify-between">
          <div>
            <div className="font-bold text-lg mb-2">{libro.titulo}</div>
            <hr />
            <p className="text-gray-700 text-base">{libro.autor}</p>
            <p className="text-gray-700 text-base">{libro.iban}</p>
            <p className="text-gray-700 text-base">{libro.disponible}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to={`/libro/${libro.iban}`} className="transition-all duration-200 ease-in-out transform hover:scale-105">
              <button
                className="w-full bg-blue-500 text-white p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer">Más información
              </button>
            </Link>
            <Link to={`/prestamo/${libro.iban}`} className="transition-all duration-200 ease-in-out transform hover:scale-105">
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