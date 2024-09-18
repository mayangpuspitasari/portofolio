const Navbar = () => {
  return (
    <div className="bg-gray-900 flex justify-between items-center font-bold px-16 py-4 text-xl border-b-4 border-gray-700">
      <div className="logo text-white text-2xl">
        May<span className="text-blue-300">ang.</span>
      </div>
      <div className="menu cursor-pointer">
        <ul className="flex gap-6 text-gray-300 hover:text-gray-100">
          <li className="hover:text-blue-300 transition-colors">Home</li>
          <li className="hover:text-blue-300 transition-colors">About</li>
          <li className="hover:text-blue-300 transition-colors">Project</li>
          <li className="hover:text-blue-300 transition-colors">Skill</li>
          <li className="hover:text-blue-300 transition-colors">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

