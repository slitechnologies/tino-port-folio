import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-800">
        Tinodashe.dev
      </Link>
      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
