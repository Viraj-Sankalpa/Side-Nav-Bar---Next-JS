import { Disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


function SideNavBar() {
  return (
    <Disclosure as="nav">
        <Disclosure.Button className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium text-gray-500  border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <GiHamburgerMenu className="w-6 h-6" 
                aria-hidden="true"
            />
        </Disclosure.Button>
    </Disclosure>
  )
}

export default SideNavBar