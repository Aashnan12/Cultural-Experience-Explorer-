import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4">
            Discover India's Rich Cultural Heritage
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore traditional art forms, vibrant festivals, and historical sites while promoting responsible tourism.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/art-explorer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-150 ease-in-out"
            >
              Explore Art Forms
            </Link>
            <Link
              to="/map"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              View Cultural Map
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative rounded shape at the bottom */}
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-white" style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }}></div>
    </div>
  );
};

export default Hero;