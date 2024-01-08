import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import githubLogo from '../images/githublogo.png';
import uaxLogo from '../images/uaxlogo.png';
import Registro from './Registro';
import InicioSesion from './InicioSesion';

function Banner() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(event.target.value);
  };

  const manejarEnvio = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/libro/${busqueda.replace(/\s/g, '_')}`);
  };
  
  return (
    <div className="grid grid-cols-3 grid-rows-1 p-5 bg-slate-gray">
      <div className="flex row gap-3">
        <div onClick={() => {
          window.open('https://github.com/LuisMi01/airbnb-mongodb_LuisMiguelUrbez', '_blank');
        }
        }
             className="hidden md:block text-sm font-semibold py-0.5 px-0.5 rounded-full hover:bg-neutral-100 transition cursor-pointer ">
          <img className="rounded-full object-cover" src={githubLogo} alt={"Github"} width={50} height={50} />
        </div>
        <div onClick={() => {
          window.open('https://uax.com', '_blank');
        }
        }
             className="hidden md:block text-sm font-semibold py-0.5 px-0.5 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <img className="rounded-full object-cover" src={uaxLogo} alt={"Uax"} width={50} height={50} />
        </div>
      </div>


      <div className="flex items-center justify-center ">
        <form className="relative" onSubmit={manejarEnvio}>
          <input value={busqueda} onChange={manejarCambio}  type="text" className="h-10 pl-8 pr-20 rounded-full z-0 focus:shadow focus:outline-none"
                 placeholder="Busca un libro..." />
          <div className="absolute top-2 right-2">
            <button type='submit' className="h-6 w-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>


      <div className="flex justify-end">
       <>
          <InicioSesion/>
          <Registro />
        </>
    </div>
    </div>
  );
};

export default Banner;