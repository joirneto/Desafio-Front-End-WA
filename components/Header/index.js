import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="w-full container mx-auto">
  <div className="flex flex-col items-center py-12">
    <Link href='/'>
    <a>
    <span className="font-bold text-indigo-800 uppercase text-center text-8xl">
      QUIZ GAME
    </span>
    </a>
    </Link>
  </div>
</header>
);

export default Header;