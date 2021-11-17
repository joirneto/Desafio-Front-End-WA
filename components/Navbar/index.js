import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="w-full py-4 bg-indigo-700 shadow">
  <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
    <nav className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
      <Link href= "/">
        <a className="hover:text-gray-200 hover:underline px-4">
          Quiz Game!
          </a>
      </Link>
      </nav>
  </div>
</nav>
);

export default Navbar;