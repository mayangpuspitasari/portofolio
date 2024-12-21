import React from 'react';
import {
  FaReact,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaBootstrap,
  FaLaravel,
  FaDatabase,
  FaPaintBrush,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiCodeigniter,
  SiExpress,
  SiPostman,
  SiCanva,
  SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: 'bg-blue-400' },
  { name: 'JavaScript', icon: <FaJs />, color: 'bg-yellow-400' },
  { name: 'PHP', icon: <FaPhp />, color: 'bg-purple-500' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'bg-green-500' },
  { name: 'CodeIgniter', icon: <SiCodeigniter />, color: 'bg-red-500' },
  { name: 'Laravel', icon: <FaLaravel />, color: 'bg-red-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-teal-400' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: 'bg-indigo-500' },
  { name: 'Express', icon: <SiExpress />, color: 'bg-gray-500' },
  { name: 'Canva', icon: <SiCanva />, color: 'bg-blue-500' },
  { name: 'Postman', icon: <SiPostman />, color: 'bg-orange-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'bg-blue-600' },
];

const Skill = () => {
  return (
    <section className="bg-gray-900 py-20" id="skill">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4">
              <div
                className={`text-white text-5xl w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition transform duration-300 ease-in-out ${skill.color}`}
              >
                {skill.icon}
              </div>
              <p className="text-white font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

