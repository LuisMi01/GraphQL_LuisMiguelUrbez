'use client'

import {GiBookCover, GiBookshelf, GiHeartBottle, GiAlienFire, GiCrystalBall, GiKnifeThrust, GiQuillInk, GiLifeSupport, GiAncientSword, GiCook} from "react-icons/gi";

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
  return (
    <div className="flex flex-row justify-center space-x-4 p-3 overflow-auto">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer w-48 h-30">
          <category.icon className="text-5xl text-blue-500"/>
          <div className="text-sm font-semibold">{category.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Categories