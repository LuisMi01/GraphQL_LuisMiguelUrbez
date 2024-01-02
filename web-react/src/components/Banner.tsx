import React from 'react';
import '../App.css';
import githubLogo from '../images/githublogo.png';
import uaxLogo from '../images/uaxlogo.png';

const Banner = () => {
  return (
    <div className="flex row justify-between p-5 bg-slate-gray">
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
      <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md shadow-md">
        <input type="text" placeholder="Buscar un libro..."
               className="border-0 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button
          className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">🔍
        </button>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white p-2 rounded shadow-md hover:shadow-lg transition cursor-pointer">Iniciar
          sesión
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded ml-2 shadow-md hover:shadow-lg transition cursor-pointer">Registrarse
        </button>
      </div>
    </div>
  );
};

export default Banner;