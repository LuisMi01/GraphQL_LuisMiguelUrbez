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
        <div className="modal">
          <form onSubmit={manejarEnvio}>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" />
            <input type="text" value={rol} onChange={e => setRol(e.target.value)} placeholder="Rol" />
            <button type="submit"
              className="bg-green-500 text-white p-2 rounded ml-2 shadow-md hover:shadow-lg transition cursor-pointer">Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Registro;