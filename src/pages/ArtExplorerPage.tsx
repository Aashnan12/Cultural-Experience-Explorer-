import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { states } from '../data/states';
import { ArtForm } from '../types';
import { ChevronLeft } from 'lucide-react';

const ArtExplorerPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [artForms, setArtForms] = useState<ArtForm[]>([]);
  const [selectedArtForm, setSelectedArtForm] = useState<ArtForm | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Collect all art forms from all states
    const allArtForms = states.flatMap(state => state.artForms);
    
    // Filter by category if provided
    if (category) {
      setArtForms(allArtForms.filter(art => art.category === category));
    } else {
      setArtForms(allArtForms);
    }
  }, [category]);

  // Get unique origin states for filtering
  const originStates = [...new Set(artForms.map(art => art.originState))];

  // Filter art forms by selected state
  const filteredArtForms = filter === 'all' 
    ? artForms 
    : artForms.filter(art => art.originState === filter);

  const categoryTitles: Record<string, string> = {
    'painting': 'Traditional Paintings',
    'dance': 'Classical & Folk Dances',
    'music': 'Musical Traditions',
    'craft': 'Handicrafts & Textiles'
  };

  const categoryDescriptions: Record<string, string> = {
    'painting': 'Discover the rich visual storytelling traditions of India through its diverse painting styles, from intricate miniatures to vibrant folk art.',
    'dance': 'Explore the graceful movements and cultural expressions embodied in India\'s classical and folk dance traditions.',
    'music': 'Experience the melodious heritage of India\'s musical traditions, instruments, and vocal styles passed down through generations.',
    'craft': 'Admire the skilled craftsmanship and artistic heritage preserved in India\'s traditional handicrafts and textile arts.'
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {category ? categoryTitles[category] : 'All Art Forms'}
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            {category ? categoryDescriptions[category] : 'Explore the diverse artistic traditions from across India, representing centuries of cultural heritage.'}
          </p>
          
          {category && (
            <div className="mt-6">
              <Link to="/art-explorer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <ChevronLeft className="h-4 w-4 mr-1" />
                View all categories
              </Link>
            </div>
          )}
        </div>
        
        {/* Filter by state */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-white rounded-md shadow-sm p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'all' 
                  ? 'bg-blue-800 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All States
            </button>
            
            {originStates.map((state) => (
              <button
                key={state}
                onClick={() => setFilter(state)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  filter === state 
                    ? 'bg-blue-800 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* Art form grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtForms.map((artForm) => (
            <div 
              key={artForm.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedArtForm(artForm)}
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={artForm.imageUrl}
                  alt={artForm.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{artForm.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {artForm.originState}
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-3">{artForm.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredArtForms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No art forms found for the selected criteria.</p>
          </div>
        )}
      </div>
      
      {/* Modal for selected art form */}
      {selectedArtForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="h-64 w-full overflow-hidden">
              <img 
                src={selectedArtForm.imageUrl}
                alt={selectedArtForm.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedArtForm.name}</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedArtForm.originState}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{selectedArtForm.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedArtForm(null)}
                  className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition duration-150 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtExplorerPage;