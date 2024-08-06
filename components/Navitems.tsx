import { Briefcase, Home, HomeIcon, MessageCircle, User } from 'lucide-react'
import React from 'react'
import { text } from 'stream/consumers'
import Link from 'next/link'
//difining the type because of typescript
type NAVITEMS = {
  src: string,
  icon: JSX.Element,
  text: string
}
//defining the array of items
const navitems:NAVITEMS[] = [
  {
    src: "/home",
    icon: <HomeIcon />,
    text: "home"
  },
  {
    src: "/network",
    icon: <User />,
    text: "Friends"
  },
]
//main function to return the component
const Navitems = () => {
  return (
    <div className='flex gap-8'>
      {
        navitems.map((navitems, index) => {//map the array with idex to render all the elements in the array
          return (
            <div key={index} className='flex flex-col items-center cursor-pointer text-[#222223]'>
              <span>{navitems.icon}</span>
              <Link className= 'text-xs' href={navitems.src}>{navitems.text}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Navitems