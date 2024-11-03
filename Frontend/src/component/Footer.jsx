import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
        
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">College Blogs</h1>
          </div>

         
          <div className="flex space-x-4">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#services" className="hover:underline">
              Our Blogs
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CollegeBlogs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
