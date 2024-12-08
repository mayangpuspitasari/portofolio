import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 font-bold px-4 md:px-16 py-4 text-xl border-b-4 border-gray-700 sticky top-0 z-10">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-white text-2xl">
          May<span className="text-blue-300">ang.</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-gray-300 md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent py-4 md:py-0 text-center md:text-left`}
        >
          <ul className="flex flex-col md:flex-row gap-6 text-gray-300">
            {['home', 'about', 'skill', 'project', 'contact'].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item}`}
                  className="transition-colors hover:text-blue-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
                {/* Underline effect */}
                <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

