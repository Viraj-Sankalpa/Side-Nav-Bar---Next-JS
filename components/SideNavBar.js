import { Disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


function SideNavBar() {
  return (
    <div>
        <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white hover:bg-gray-900 ">
            <GiHamburgerMenu className="block md:hidden w-6 h-6"
                aria-hidden="true"
            />
        </Disclosure.Button>

        <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer focus:left-0 peer:transition ease-out delay-150 duration-200'>
               
        </div>
        
    </Disclosure>
    </div>
  )
}

export default SideNavBar