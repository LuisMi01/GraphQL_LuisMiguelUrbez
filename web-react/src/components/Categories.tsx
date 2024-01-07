'use client'
import {GiBookCover, GiBookshelf, GiHeartBottle, GiAlienFire, GiCrystalBall, GiKnifeThrust, GiQuillInk, GiLifeSupport, GiAncientSword, GiCook} from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const categories = [
  {
    label: 'Ficción',
    icon: GiBookCover,
    description: 'Libros de ficción'
  },
  {
    label: 'Misterio',
    icon: GiBookshelf,
    description: 'Libros de misterio'
  },
  {
    label: 'Romance',
    icon: GiHeartBottle,
    description: 'Libros de romance'
  },
  {
    label: 'Ciencia Ficción',
    icon: GiAlienFire,
    description: 'Libros de ciencia ficción'
  },
  {
    label: 'Fantasía',
    icon: GiCrystalBall,
    description: 'Libros de fantasía'
  },
  {
    label: 'Thriller',
    icon: GiKnifeThrust,
    description: 'Libros de thriller'
  },
  {
    label: 'Biografía',
    icon: GiQuillInk,
    description: 'Libros de biografía'
  },
  {
    label: 'Autoayuda',
    icon: GiLifeSupport,
    description: 'Libros de autoayuda'
  },
  {
    label: 'Historia',
    icon: GiAncientSword,
    description: 'Libros de historia'
  },
  {
    label: 'Cocina',
    icon: GiCook,
    description: 'Libros de cocina'
  }
]


const Categories = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);

  return (
    <div className="flex flex-row space-x-4 p-3 overflow-auto">
      {categories.map((category, index) => (
        <Link to={`/categoria/${category.label}`} key={index} onClick={() => setCategoriaSeleccionada(category.label)}>
          <div className={`flex flex-col items-center  p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer w-40 h-30 ${categoriaSeleccionada === category.label ? 'bg-gray-300' : ''}`}>
            <category.icon className="text-5xl text-blue-500"/>
            <div className="text-sm font-semibold">{category.label}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories;