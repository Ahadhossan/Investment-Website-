import Link from 'next/link';
import React from 'react'
import { FaBars } from 'react-icons/fa';

type Props = {
    openNav:()=> void
}

const Nav = ({openNav}: Props) => {
  return (
    <div className="h-[10vh] bg-[#62269d] shadow-md">
      <div className="w-[90%] flex items-center justify-between mx-auto h-[10vh]">
        {/* logo */}
        <h1 className="text-[15px] md:text-[23px] font-bold text-white">
          <span className="text-[25px] md:text-[37px] text-yellow-300">IN</span>
          Vestor
        </h1>
        {/* nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[15px] font-semibold cursor-pointer text-yellow-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[15px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-300">
            <Link href="/">About</Link>
          </li>
          <li className="text-[15px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-300">
            <Link href="/">Investment</Link>
          </li>
          <li className="text-[15px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-300">
            <Link href="/">Services</Link>
          </li>
          <li className="text-[15px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-300">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[15px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-300">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        {/* login button and navbar menu */}
        <div className="flex items-center space-x-4">
          {/* login button */}
          <button className="rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Login</span>
          </button>
          {/*navbar menu */}
          <FaBars onClick={openNav} className='w-8 h-8 text-white cursor-pointer lg:hidden'/>
        </div>
      </div>
    </div>
  );
}

export default Nav
