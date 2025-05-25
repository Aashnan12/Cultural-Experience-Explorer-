import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6" />
              <span className="ml-2 text-lg font-bold">Cultural Experience Explorer</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Discover India's rich cultural heritage and promote responsible tourism
              through our interactive platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/art-explorer" className="text-gray-300 hover:text-white text-sm">
                  Art Explorer
                </Link>
              </li>
              <li>
                <Link to="/states" className="text-gray-300 hover:text-white text-sm">
                  State Profiles
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-300 hover:text-white text-sm">
                  Cultural Map
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-gray-300 hover:text-white text-sm">
                  Tourism Guidelines
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                info@culturalexplorer.org
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +91 123 456 7890
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                Subscribe to our newsletter for the latest updates
              </p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm text-gray-700 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-r-md transition duration-150 ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Cultural Experience Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;