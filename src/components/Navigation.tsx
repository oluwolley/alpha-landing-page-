'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2A0A4A] py-4 px-4 md:px-6 sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between min-w-0">
        {/* Logo */}
        <div className="text-white text-xl md:text-2xl font-bold flex-shrink-0">
          Alpha
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-white hover:text-yellow-400 transition-colors">Product</a>
          <a href="#pricing" className="text-white hover:text-yellow-400 transition-colors">Pricing</a>
          <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white hover:text-yellow-400 transition-colors">Sign In</button>
          <button className="bg-yellow-400 text-[#2A0A4A] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white flex-shrink-0 ml-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2A0A4A] border-t border-purple-700 mt-4 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#product" className="text-white hover:text-yellow-400 transition-colors">Product</a>
            <a href="#pricing" className="text-white hover:text-yellow-400 transition-colors">Pricing</a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            <div className="pt-4 border-t border-purple-700">
              <button className="text-white hover:text-yellow-400 transition-colors mb-2 block">Sign In</button>
              <button className="bg-yellow-400 text-[#2A0A4A] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
