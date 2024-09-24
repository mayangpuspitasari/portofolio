import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div
      className="bg-gray-900 bg-cover bg-center grid grid-cols-2 items-center px-40 py-20 gap-10"
      id="about"
    >
      <div className="flex justify-center">
        <div className="relative p-4 overflow-hidden transform hover:scale-105 hover:rotate-3 transition-transform duration-700">
          <img
            src="src/asset/Mayang.jpg"
            alt="Gambar Diri"
            className="w-60 h-60 rounded-full object-cover hover:shadow-2xl transition-shadow duration-300"
            style={{ boxShadow: '0 4px 6px 0 rgba(147, 197, 253, 0.5)' }} // ini blue-300
          />
        </div>
      </div>
      <div className="keterangan text-white space-y-6">
        <h1 className="text-4xl font-bold text-white ">
          About Me <span>👩‍💻👩</span>
        </h1>
        <p className="text-lg leading-relaxed">
          Halo! 👋😊 Saya
          <span className="text-blue-300 font-bold">
            {' '}
            Mayang Puspita Sari,
          </span>{' '}
          seorang mahasiswa Sistem Informasi semester 7 yang memiliki minat
          besar di bidang teknologi, khususnya dalam pengembangan web. Saya
          memiliki keterampilan dalam membangun aplikasi web yang responsif dan
          interaktif.
        </p>
        <p className="text-lg">
          Jangan ragu untuk menjelajahi portofolio saya dan menghubungi saya di{' '}
          LinkedIn atau GitHub!😊
        </p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-transform duration-500 hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-transform duration-500 hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-transform duration-500 hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

