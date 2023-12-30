import React from 'react';
import Container from "./Container";
import {GiBookCover} from "react-icons/gi";
import CategoryBox from "./CategoryBox"
import {usePathname, useSearchParams} from "next/navigation";

export const categories = [
  {
    label: 'Ficción',
    icon: GiBookCover,
    description: 'Libros de ficción'
  },
  {
    label: 'Misterio',
    icon: GiBookCover,
    description: 'Libros de misterio'
  },
  {
    label: 'Romance',
    icon: GiBookCover,
    description: 'Libros de romance'
  },
  {
    label: 'Ciencia Ficción',
    icon: GiBookCover,
    description: 'Libros de ciencia ficción'
  },
  {
    label: 'Fantasía',
    icon: GiBookCover,
    description: 'Libros de fantasía'
  },
  {
    label: 'Thriller',
    icon: GiBookCover,
    description: 'Libros de thriller'
  },
  {
    label: 'Biografía',
    icon: GiBookCover,
    description: 'Libros de biografía'
  },
  {
    label: 'Autoayuda',
    icon: GiBookCover,
    description: 'Libros de autoayuda'
  },
  {
    label: 'Historia',
    icon: GiBookCover,
    description: 'Libros de historia'
  },
  {
    label: 'Cocina',
    icon: GiBookCover,
    description: 'Libros de cocina'
  }
]

const Categories= () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname()

  const isMainPage = pathname === "/";

  if(!isMainPage){
    return null;
  }
  return (
    <Container>
      <div className="pt-3 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories;