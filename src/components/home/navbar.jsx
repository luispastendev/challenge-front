import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkNav } from 'react-router-dom';



const navigation = [
  { name: 'Home', href: '#', current: true, to: "home" },
  { name: 'Nosotros', href: '#', current: false, to: "us" },
  { name: 'Servicios', href: '#', current: false, to: "services" },
  { name: 'Caracteristicas', href: '#', current: false, to: "features" },
  { name: 'Equipo', href: '#', current: false, to: "team" },
  { name: 'Contacto', href: '#', current: false, to: "contact" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-black-800 fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h2 className='text-white font-bold text-lg'>emprenD</h2>
                </div>
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, key) => (
                      <Link
                        to={item.to} spy={true} smooth={'easeInOutQuint'} offset={-34} duration={500}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-black-900 text-white' : 'text-black-300 hover:bg-black-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      > 
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <LinkNav to="/login" className="absolute right-0 inline-flex items-center px-2 lg:px-3 py-1 lg:py-2 lg:text-sm text-xs border border-transparent leading-4 font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Ingresar
              </LinkNav>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  // as="a"
                  // href={item.href}
                  className={classNames(
                    item.current ? 'bg-black-900 text-white' : 'text-black-300 hover:bg-black-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  as={Fragment}
                >
                  <Link href={item.href} to={item.to} spy={true} smooth={'easeInOutQuint'} offset={-34} duration={500}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar