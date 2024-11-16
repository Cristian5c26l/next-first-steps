import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from '@/components';


interface NavItem {
    path: string;
    text: string;
}

const navItems: NavItem[]  = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = async() => {

    

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
          <Link href={'/'} className="flex items-center">
            <HomeIcon className="mr-2" />
            <span className="mr-2">Home</span>
          </Link>
          
          <div className='flex-1'></div>{/**flex-1 (flex: 1 1 0%) hace que el div (que es flexible gracias a flex) crezca si hay espacio disponible (flex-grow: 1) y al mismo tiempo hace que el div se encoja si su padre (que en este caso es el nav) reduce su tamaño (flex-shrink: 1). El 0% (flex-basis: 0%) establece el tamaño base en 0, lo cual le dice al elemento que ignore su tamaño natural y se adapte al espacio disponible. */}

          {/* <Link className='mr-2' href="/about">About</Link>
          <Link className='mr-2' href="/pricing">Pricing</Link>
          <Link className='mr-2' href="/contact">Contact</Link> */}

          {
              navItems.map((item) => (
                  <ActiveLink key={item.path} {...item} />
              ))
          }
    </nav>
  )
}
