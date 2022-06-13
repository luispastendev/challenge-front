import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../lib/context';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const Navbar = () => {

  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const signOut = () => {
    navigate('/')
    logout();
  }

  return (
    <Disclosure as="nav" className="bg-black-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-100-black text-bold text-white">
                  emprenD
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-black-800 flex text-sm py-1 px-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <h2 className='text-black text-white text-lg'>{ user.name }</h2>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black-400 ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={ signOut }
                              className={classNames(
                                active ? 'bg-black-100' : '',
                                'block px-4 py-2 text-sm text-black-700'
                              )}
                            >
                              Cerrar Session
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-4 pb-3 border-t border-black-700">
              <div className="flex items-center pr-5">
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{ user.name }</div>
                  <div className="text-sm font-medium text-black-400">{ user.email }</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black-400 hover:text-white hover:bg-black-700"
                >
                  Cerrar Sesión
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
