import React, { createContext, useState, useContext } from 'react';

// Crear el Contexto de Usuario
const UsuarioContext = createContext(null);

// Crear el Proveedor de Usuario
export const UsuarioProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (usuario: any) => {
    setUsuario(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

};

// Crear un hook personalizado para usar el Contexto de Usuario
export const useUsuario = () => useContext(UsuarioContext);