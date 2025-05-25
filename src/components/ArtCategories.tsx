import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Music, Footprints, Scissors } from 'lucide-react';

const categories = [
  {
    id: 'painting',
    name: 'Painting',
    description: 'Traditional painting styles from across India',
    icon: <Palette className="h-8 w-8" />,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'dance',
    name: 'Dance',
    description: 'Classical and folk dance forms of India',
    icon: <Footprints className="h-8 w-8" />,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Diverse musical traditions and instruments',
    icon: <Music className="h-8 w-8" />,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'craft',
    name: 'Handicrafts',
    description: 'Intricate craftsmanship and textile arts',
    icon: <Scissors className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-500'
  }
];

const ArtCategories: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Art Forms
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Discover the rich tapestry of India's traditional art forms, passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/art-explorer/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`p-6 bg-gradient-to-r ${category.color} text-white`}>
                  <div className="flex justify-center">{category.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtCategories;