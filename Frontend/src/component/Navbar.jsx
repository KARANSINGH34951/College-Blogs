import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">My Blog</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/blog" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            Blogs
          </Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white hover:bg-blue-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/blog" className="block text-white hover:bg-blue-700 px-3 py-2 rounded">
            Blogs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;