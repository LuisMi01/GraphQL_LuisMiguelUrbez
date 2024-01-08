import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { INICIAR_SESION } from "../queries/Query";

function InicioSesion() {
    const [iniciarSesion] = useMutation(INICIAR_SESION, {
        onCompleted: (data) => {
          localStorage.setItem('usuario', JSON.stringify(data.iniciarSesion));
          setMostrarFormulario(false);
          alert("Sesion inciada: " + email)
        },
      });
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  const manejarEnvio = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    iniciarSesion({ variables: { email, contrasena } });
  };

  return (
    <>
      <button
        onClick={() => setMostrarFormulario(true)}
        className="bg-blue-500 text-white p-2 rounded ml-2 shadow-md hover:shadow-lg transition cursor-pointer">Iniciar Sesión
      </button>
      {mostrarFormulario && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-8 m-4 max-w-xs max-h-full text-center">
            <button
              onClick={() => setMostrarFormulario(false)}
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              &times;
            </button>
            <form onSubmit={manejarEnvio}>
              <h2 className='text-left text-2xl font-bold m-1 border-b-2 border-black'>Iniciar Sesión</h2>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-3 border rounded" />
              <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" className="w-full p-2 mb-3 border rounded" />
              <button type="submit"
                className="w-full p-2 mt-2 bg-blue-500 text-white rounded shadow-md hover:shadow-lg transition cursor-pointer">Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default InicioSesion;