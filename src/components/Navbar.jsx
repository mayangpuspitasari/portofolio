import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex justify-between items-center font-bold px-4 md:px-16 py-4 text-xl border-b-4 border-gray-700 sticky top-0 z-10">
      <div className="logo text-white text-2xl">
        May<span className="text-blue-300">ang.</span>
      </div>
      <div className="menu cursor-pointer">
        <ul className="flex gap-6 text-gray-300">
          {['home', 'about', 'skill', 'project', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="transition-colors hover:text-blue-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

