import { Disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


function SideNavBar() {
  return (
    <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white hover:bg-gray-800 ">
            <GiHamburgerMenu className="w-6 h-6" 
                aria-hidden="true"
            />
        </Disclosure.Button>
    </Disclosure>
  )
}

export default SideNavBar