import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div
      className="bg-black bg-cover bg-center flex items-center justify-between px-40 py-20"
      id="about"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative p-4 overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-lg shadow-blue-500/50">
          <img
            src="src/asset/Mayang.jpg"
            alt="Gambar Diri"
            className="w-60 h-60 object-cover hover:shadow-xl bg-blue-500 shadow-lg  transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="keterangan text-white">
        <h1 className="text-4xl font-bold mb-4 text-blue-300 pb-8">
          About Me 👩‍💻
        </h1>
        <p className="text-xl pb-8">
          Halo! 👋😊 Saya{' '}
          <span className="text-blue-300 font-bold"> Mayang Puspita Sari,</span>{' '}
          seorang mahasiswa <br /> Sistem Informasi semester 7 yang memiliki
          minat besar di bidang <br /> teknologi, khususnya dalam pengembangan
          web. Selama perjalanan <br />
          akademis saya, saya telah mengembangkan keterampilan saya, <br />
          dalam membangun sebuah aplikasi web yang responsif dan interaktif.{' '}
          <br />
        </p>
        <p className="text-xl">
          Jangan ragu untuk menjelajahi portofolio saya dan menghubungi saya di{' '}
          <br />
          LinkedIn atau GitHub!😊
        </p>
        <div className="flex gap-4 mt-4 pt-4">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-transform duration-500 shadow-lg shadow-blue-500/50"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-transform duration-500 shadow-lg shadow-blue-500/50"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-transform duration-500 shadow-lg shadow-blue-500/50"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

