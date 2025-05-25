import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { states } from '../data/states';
import { Search, ChevronRight } from 'lucide-react';

const StatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStates = states.filter(state => 
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Explore Indian States
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Discover the diverse cultural identities of India's states, each with its own rich traditions, art forms, and heritage sites.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search states..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* States grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStates.map((state) => (
            <Link 
              key={state.id}
              to={`/states/${state.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
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
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">
                      {state.culturalSites.length} Cultural Sites
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {state.artForms.length} Art Forms
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredStates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No states found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatesPage;