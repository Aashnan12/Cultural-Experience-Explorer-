import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Leaf, Heart, Users } from 'lucide-react';

const ResponsibleTourism: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Responsible Tourism
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Explore India's cultural treasures while preserving them for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Eco-Friendly Travel</h3>
            <p className="text-blue-100 text-center">
              Minimize your environmental impact while exploring India's natural beauty.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Cultural Respect</h3>
            <p className="text-blue-100 text-center">
              Honor local customs, traditions, and sacred sites during your visit.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Community Support</h3>
            <p className="text-blue-100 text-center">
              Support local communities by purchasing authentic crafts and using local services.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Safe Travel</h3>
            <p className="text-blue-100 text-center">
              Stay informed about local conditions and follow safety guidelines during your journey.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/guidelines"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            View Tourism Guidelines
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleTourism;