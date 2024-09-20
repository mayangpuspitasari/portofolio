import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const texts = ['Junior Developer', 'Frontend Developer'];
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
    <div
      className="bg-[url('src/asset/night3.jpg')] bg-cover bg-center h-screen flex items-center justify-center px-40"
      id="home"
    >
      <div className="keterangan text-white">
        <h1 className="text-6xl font-bold mb-4">Hai! 👋😊</h1>
        <p className="text-4xl font-bold mb-2">
          Nama Saya{' '}
          <span className="text-4xl font-bold text-blue-300">
            Mayang Puspita Sari
          </span>
        </p>
        <p className="text-xl font-bold">
          Saya Seorang{' '}
          <span className="font-bold text-blue-300 text-4xl">
            {displayText}
          </span>{' '}
          <br />
        </p>
        <button className="mt-6 bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;

