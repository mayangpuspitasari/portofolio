import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-12" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulir Kontak */}
        <div>
          <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Informasi Kontak */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-teal-500 text-xl mr-4"
            />
            <p>Kisaran, Sumatra Utara Asahan</p>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-teal-500 text-xl mr-4"
            />
            <p>(+62) 822-7766-5179</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-teal-500 text-xl mr-4"
            />
            <p>mayangpuspitas410@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

