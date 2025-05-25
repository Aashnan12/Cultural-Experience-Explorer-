import React from 'react';
import { Link } from 'react-router-dom';
import { states } from '../data/states';
import { ChevronRight } from 'lucide-react';

const FeaturedStates: React.FC = () => {
  // Use only the first 3 states for the featured section
  const featuredStates = states.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Featured States
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Discover the unique cultural identities of India's diverse states, each with its own rich traditions, art forms, and heritage sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStates.map((state) => (
            <div 
              key={state.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={state.imageUrl} 
                  alt={state.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{state.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{state.description}</p>
                <Link 
                  to={`/states/${state.id}`} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Discover more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/states"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition duration-150 ease-in-out"
          >
            View All States
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStates;