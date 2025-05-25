import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Globe className="h-8 w-8 text-blue-800" />
              <span className="ml-2 text-xl font-bold text-blue-800">
                Cultural Experience Explorer
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              Home
            </Link>
            <Link to="/art-explorer" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              Art Explorer
            </Link>
            <Link to="/states" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              State Profiles
            </Link>
            <Link to="/map" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              Cultural Map
            </Link>
            <Link to="/guidelines" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50">
              Tourism Guidelines
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/art-explorer" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Art Explorer
            </Link>
            <Link 
              to="/states" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              State Profiles
            </Link>
            <Link 
              to="/map" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Cultural Map
            </Link>
            <Link 
              to="/guidelines" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Tourism Guidelines
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;