'use client'

import Image from 'next/image'



const Logo = () => {
  return (
    <div className="relative">
        <div onClick={() =>{window.open('https://github.com/LuisMi01/airbnb-mongodb_LuisMiguelUrbez', '_blank');}
        } className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <Image src='/images/githublogo.png' alt={"Github"} width={30} height={30}/>
        </div>
        <div onClick={() =>{window.open('https://uax.com', '_blank');}
        } className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <Image src='/images/uaxlogo.png' alt={"Uax"} width={30} height={30}/>
        </div>
    </div>
  )
}

export default Logo;