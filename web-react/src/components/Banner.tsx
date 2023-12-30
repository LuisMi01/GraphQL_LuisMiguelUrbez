import React from 'react';
import '../App.css';
import githubLogo from '../images/githublogo.png';
import uaxLogo from '../images/uaxlogo.png';

const Banner = () => {
  return (
    <div className="flex row justify-between p-5 bg-slate-gray">
      <div className="flex row gap-1">
        <div onClick={() =>{window.open('https://github.com/LuisMi01/airbnb-mongodb_LuisMiguelUrbez', '_blank');}
        } className="hidden md:block text-sm font-semibold py-0.5 px-0.5 rounded-full hover:bg-neutral-100 transition cursor-pointer ">
          <img className="rounded-full object-cover" src={githubLogo} alt={"Github"} width={50} height={50}/>
        </div>
        <div onClick={() =>{window.open('https://uax.com', '_blank');}
        } className="hidden md:block text-sm font-semibold py-0.5 px-0.5 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <img className="rounded-full object-cover" src={uaxLogo} alt={"Uax"} width={50} height={50}/>
        </div>
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