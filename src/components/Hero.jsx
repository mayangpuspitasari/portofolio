import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  const texts = ['Frontend Developer', 'Programmer', 'Web Developer'];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null); // Menggunakan useRef untuk menyimpan timer

  useEffect(() => {
    const text = texts[textIndex];
    let i = isDeleting ? text.length : 0;

    const updateText = () => {
      if (isDeleting) {
        setDisplayText(text.substring(0, i));
        i--;
        if (i < 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          timerRef.current = setTimeout(updateText, 500); // Delay before starting the next text
        } else {
          timerRef.current = setTimeout(updateText, 50); // Speed of deletion
        }
      } else {
        setDisplayText(text.substring(0, i));
        i++;
        if (i > text.length) {
          setIsDeleting(true);
          timerRef.current = setTimeout(updateText, 1000); // Delay before starting to delete
        } else {
          timerRef.current = setTimeout(updateText, 100); // Speed of typing
        }
      }
    };

    // Start the typing/deleting process
    updateText();

    // Cleanup function to clear the timer
    return () => clearTimeout(timerRef.current);
  }, [textIndex, isDeleting]);

  return (
    <div className="bg-[url('src/asset/night3.jpg')] bg-cover bg-center h-screen flex items-center justify-between px-40">
      <div className="keterangan text-white">
        <h1 className="text-4xl font-bold mb-4">Hai👋😊</h1>
        <p className="text-2xl font-bold mb-2">
          Saya{' '}
          <span className="text-4xl font-bold text-blue-300">
            Mayang Puspita Sari
          </span>
        </p>
        <p className="text-xl">
          Saya adalah seorang{' '}
          <span className="font-bold text-blue-300 text-2xl">
            {displayText}
          </span>{' '}
          <br />
          Saat ini saya adalah seorang mahasiswa Sistem Informasi Semester 7.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <button className=" mt-6 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Download CV
        </button>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img
          src="src/asset/Mayang.jpg"
          alt="Gambar Diri"
          className="w-60 h-60 rounded-full object-cover shadow-lg shadow-blue-300"
        />
      </div>
    </div>
  );
};

export default Hero;

