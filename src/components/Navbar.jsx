const Navbar = () => {
  return (
    <div className="bg-gray-900 flex justify-between items-center font-bold px-16 py-4 text-xl border-b-4 border-gray-700 sticky top-0">
      <div className="logo text-white text-2xl">
        May<span className="text-blue-300">ang.</span>
      </div>
      <div className="menu cursor-pointer">
        <ul className="flex gap-6 text-gray-300">
          <li className="relative group">
            <a href="#home" className="transition-colors hover:text-blue-300">
              Home
            </a>
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#about" className="transition-colors hover:text-blue-300">
              About
            </a>
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a
              href="#project"
              className="transition-colors hover:text-blue-300"
            >
              Project
            </a>
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#skill" className="transition-colors hover:text-blue-300">
              Skill
            </a>
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className="transition-colors hover:text-blue-300"
            >
              Contact
            </a>
            <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

