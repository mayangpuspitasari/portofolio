import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Intermediate', color: 'yellow' },
  { name: 'React', level: 'Intermediate', color: 'blue-500' },
  { name: 'Tailwind CSS', level: 'Advanced', color: 'teal-500' },
  { name: 'Node.js', level: 'Beginer', color: 'green-500' },
  { name: 'PHP', level: 'Intermediate', color: 'blue-300' },
  { name: 'Bootstrap', level: 'Advanced', color: 'blue-700' },
];

const Skill = () => {
  return (
    <section className="bg-gray-900 py-20" id="skill">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-${skill.color} hover:scale-105 transition transform duration-300 ease-in-out`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-400">{skill.level}</p>
              <div className="mt-4">
                <div
                  className={`w-full h-2 bg-${skill.color} rounded-full`}
                  style={{
                    width:
                      skill.level === 'Expert'
                        ? '100%'
                        : skill.level === 'Advanced'
                        ? '75%'
                        : skill.level === 'Intermediate'
                        ? '50%'
                        : '25%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

