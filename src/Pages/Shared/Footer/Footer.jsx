import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../Images/Logo/logoBlog2.png';





const Footer = () => {
    return (
        <footer className="bg-gray-900 py-6 mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 lg:mb-0">
          <img  src={logo} alt="Car Toys Logo" className="w-12 h-12 mr-2 rounded-full" />
          <h2 className="text-white text-xl font-bold">Blog Platform</h2>
        </div>
        <div className="text-white mb-4 lg:mb-0">
          <p className="mb-2">Contact us:</p>
          <p className="mb-2">Phone: 01741-****</p>
          <p className="mb-2">Email: blogplatform@gmail.com</p>
          <p>Address: New York, USA</p>
        </div>
        <div className="text-white">
          <p className="mb-2">Follow us:</p>
          <ul className="flex">
            <li className="mr-2">
              <a href="https://www.facebook.com/" className="text-white hover:text-gray-300">
                <FaFacebook size={20} />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.twitter.com/" className="text-white hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="text-white hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-12">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Blog Platform. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;