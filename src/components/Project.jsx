import React from 'react';
import portfolioImg from '../asset/prt.jpg';
import ecommerceImg from '../asset/kopi.jpg';
import blogImg from '../asset/thread2.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Website pribadi menggunakan React dan Tailwind CSS.',
    image: portfolioImg,
    link: 'https://portofolio-six-brown.vercel.app/',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    title: 'E-commerce App',
    description: 'Aplikasi e-commerce dengan fitur cart dan checkout.',
    image: ecommerceImg,
    link: 'https://mayangpuspitasari.github.io/coffe-shop/',
    technologies: ['CSS', 'Javascript'],
  },
  {
    title: 'Blog Platform',
    description:
      'Platform blog dengan fitur CRUD menggunakan Tailwinnd CSS dan juga React.',
    image: blogImg,
    link: 'https://app-forum-diskusi.vercel.app/',
    technologies: ['React', 'Tailwind CSS'],
  },
];

const Project = () => {
  return (
    <section className="bg-gray-900 py-16" id="project">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-teal-400 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

