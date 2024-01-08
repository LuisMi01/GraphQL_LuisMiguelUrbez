
import React from 'react';

interface Usuario {
    nombre: string;
    email: string;
    contrasena: string;
    rol: string;
  }
  
  interface UsuarioContextType {
    usuario: Usuario | null;
    setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
  }
  
  const UsuarioContext = React.createContext<UsuarioContextType | null>(null);
export default UsuarioContext;