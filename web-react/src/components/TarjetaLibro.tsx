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
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-64 h-80">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{libro.titulo}</div>
          <p className="text-gray-700 text-base">{libro.autor}</p>
          <p className="text-gray-700 text-base">{libro.iban}</p>
          <p className="text-gray-700 text-base">{libro.disponible}</p>
        </div>
      </div>
    </div>
  );
}

export default TarjetaLibro;