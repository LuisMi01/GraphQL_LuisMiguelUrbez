import React from 'react';
import '../App.css'; // Asegúrate de importar tu archivo CSS

const Banner = () => {
  return (
    <div className="flex justify-between p-10 bg-black">
      <div>
        {/* Aquí puedes agregar tus dos botones */}
      </div>
      <div>
        <input type="text" placeholder="Buscar..." className="border p-2" />
        <button className="ml-2">🔍</button>
      </div>
      <div>
        <button className="bg-blue-500 text-white p-2 rounded">Iniciar sesión</button>
        <button className="bg-green-500 text-white p-2 rounded ml-2">Registrarse</button>
      </div>
    </div>
  );
};

export default Banner;