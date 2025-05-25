import React, { useState } from 'react';
import { tourismGuidelines } from '../data/guidelines';
import { Leaf, Heart, Users, Shield, Droplet, Shirt, Camera, Paintbrush as PaintBrush, Home, ClipboardList } from 'lucide-react';

const GuidelinesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Guidelines', icon: <Shield className="h-5 w-5" /> },
    { id: 'eco-friendly', name: 'Eco-Friendly', icon: <Leaf className="h-5 w-5" /> },
    { id: 'cultural-respect', name: 'Cultural Respect', icon: <Heart className="h-5 w-5" /> },
    { id: 'sustainable', name: 'Sustainable Tourism', icon: <Users className="h-5 w-5" /> },
    { id: 'safety', name: 'Safety', icon: <Shield className="h-5 w-5" /> }
  ];
  
  const filteredGuidelines = activeCategory === 'all' 
    ? tourismGuidelines 
    : tourismGuidelines.filter(guideline => guideline.category === activeCategory);
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf': return <Leaf className="h-6 w-6" />;
      case 'droplet': return <Droplet className="h-6 w-6" />;
      case 'shirt': return <Shirt className="h-6 w-6" />;
      case 'camera': return <Camera className="h-6 w-6" />;
      case 'paintbrush': return <PaintBrush className="h-6 w-6" />;
      case 'home': return <Home className="h-6 w-6" />;
      case 'shield': return <Shield className="h-6 w-6" />;
      case 'clipboard-list': return <ClipboardList className="h-6 w-6" />;
      default: return <Shield className="h-6 w-6" />;
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'eco-friendly': return 'bg-green-500';
      case 'cultural-respect': return 'bg-red-500';
      case 'sustainable': return 'bg-blue-500';
      case 'safety': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Responsible Tourism Guidelines
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Follow these guidelines to ensure your travel experiences respect local cultures, protect the environment, and contribute positively to communities.
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 m-2 rounded-full text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } shadow-sm transition duration-150 ease-in-out`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Guidelines grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuidelines.map((guideline) => (
            <div 
              key={guideline.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${getCategoryColor(guideline.category)} text-white mr-4`}>
                    {getIcon(guideline.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{guideline.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{guideline.description}</p>
                <div className="flex justify-end">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {guideline.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional information */}
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Eco-Tourism Certifications</h3>
                <p className="text-gray-600 mb-4">
                  Look for accommodations and tour operators with these recognized eco-tourism certifications:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-green-500 mr-2">•</span>
                    <span className="text-gray-600">Green Globe Certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-green-500 mr-2">•</span>
                    <span className="text-gray-600">Eco Tourism Society of India (ESOI) Certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-green-500 mr-2">•</span>
                    <span className="text-gray-600">Global Sustainable Tourism Council (GSTC) Recognition</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Useful Mobile Apps</h3>
                <p className="text-gray-600 mb-4">
                  These apps can help you practice responsible tourism during your travels:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Refill My Bottle - Find water refill stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Too Good To Go - Reduce food waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Fairbnb - Ethical accommodation booking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">Google Translate - Communicate respectfully in local languages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;