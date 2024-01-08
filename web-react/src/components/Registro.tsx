import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { REGISTRAR_USUARIO } from "../queries/Query";

function Registro() {
  const [registrarUsuario, { data }] = useMutation(REGISTRAR_USUARIO);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [rol, setRol] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const manejarEnvio = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registrarUsuario({ variables: { nombre, email, contrasena, rol } });
  };

  return (
    <>
      <button
        onClick={() => setMostrarFormulario(true)}
        className="bg-green-500 text-white p-2 rounded ml-2 shadow-md hover:shadow-lg transition cursor-pointer">Registrarse
      </button>
      {mostrarFormulario && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-8 m-4 max-w-xs max-h-full text-center">
            <button
              onClick={() => setMostrarFormulario(false)}
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900 cursor-pointer">
              &times;
            </button>
            <h2 className='text-left text-2xl font-bold m-1 border-b-2 border-gray-400 p-1'>Registrarse</h2>
              <form className='m-3' onSubmit={manejarEnvio}>
              
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" className="w-full p-2 mb-3 border rounded" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-3 border rounded" />
                <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" className="w-full p-2 mb-3 border rounded" />
                <select value={rol} onChange={e => setRol(e.target.value)} className="w-full p-2 mb-3 border rounded">
                  <option value="">Selecciona un rol</option>
                  <option value="Bibliotecario">Bibliotecario</option>
                  <option value="Cliente">Cliente</option>
                </select>                
                <button type="submit"
                  className="w-full p-2 mt-2 bg-green-500 text-white rounded shadow-md hover:shadow-lg transition cursor-pointer">Enviar
                </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Registro;