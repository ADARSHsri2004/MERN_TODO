import React from 'react'
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Todo App</h2>
            <p className="text-gray-400 text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
  
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Features</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
  
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
