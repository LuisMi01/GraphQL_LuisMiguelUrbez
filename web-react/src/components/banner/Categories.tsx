'use client'
import Container from "../Container";
import CategoryBox from "../CategoryBox"

import {FaBook, FaRegNewspaper, FaDragon, FaRobot, FaTheaterMasks, FaLandmark, FaUtensils, FaHeart, FaBookOpen, FaQuestionCircle} from "react-icons/fa";
import {usePathname, useSearchParams} from "next/navigation";

export const categories = [
  {
    label: 'Autoayuda',
    icon: FaBook,
    description: 'Estos libros sirven para ayudarte a ti mismo'
  },
  {
    label: 'Biografias',
    icon: FaRegNewspaper,
    description: 'Estos libros son biografias personales'
  },
  {
    label: 'Fantasia',
    icon: FaDragon,
    description: 'Estos libros son de fantasia'
  },
  {
    label: 'Ciencia Ficcion',
    icon: FaRobot,
    description: 'Estos libros son de ciencia ficcion'
  },
  {
    label: 'Thriler',
    icon: FaTheaterMasks,
    description: 'Estos libros son de suspense'
  },
  {
    label: 'Historia',
    icon: FaLandmark,
    description: 'Estos libros son de historia'
  },
  {
    label: 'Cocina',
    icon: FaUtensils,
    description: 'Estos libros son de cocina'
  },
  {
    label: 'Romance',
    icon: FaHeart,
    description: 'Estos libros son de romance'
  },
  {
    label: 'Ficcion',
    icon: FaBookOpen,
    description: 'Estos libros son de ficcion'
  },
  {
    label: 'Misterio',
    icon: FaQuestionCircle,
    description: 'Estos libros son de misterio'
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

export default Categories