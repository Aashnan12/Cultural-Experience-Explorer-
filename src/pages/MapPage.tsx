import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { states } from '../data/states';
import { CulturalSite } from '../types';
import 'leaflet/dist/leaflet.css';
import { Map, MapPin } from 'lucide-react';

// Fix Leaflet marker icon issue
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  
  // Collect all cultural sites from all states
  const allSites = states.flatMap(state => 
    state.culturalSites.map(site => ({
      ...site,
      stateName: state.name
    }))
  );
  
  // Filter sites by type if selected
  const filteredSites = selectedType === 'all' 
    ? allSites 
    : allSites.filter(site => site.type === selectedType);

  // Get unique site types for filtering
  const siteTypes = ['all', ...new Set(allSites.map(site => site.type))];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Cultural Sites Map
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Explore the geographic distribution of India's cultural and heritage sites, from ancient temples to magnificent palaces.
          </p>
        </div>
        
        {/* Filter */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex shadow-sm rounded-md bg-white">
            {siteTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedType === type
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                } ${type === 'all' ? 'rounded-l-md' : ''} ${
                  type === siteTypes[siteTypes.length - 1] ? 'rounded-r-md' : ''
                }`}
              >
                {type === 'all' ? 'All Sites' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Map container */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-[600px] z-0">
            <MapContainer 
              center={[20.5937, 78.9629]} 
              zoom={5} 
              scrollWheelZoom={true} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredSites.map(site => (
                <Marker 
                  key={site.id} 
                  position={[site.latitude, site.longitude]}
                >
                  <Popup>
                    <div className="p-1">
                      <h3 className="font-bold text-gray-900">{site.name}</h3>
                      <p className="text-sm text-gray-600 my-1">{site.description.substring(0, 100)}...</p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">{site.stateName}</span> • {site.type}
                      </p>
                      <p className="text-xs text-gray-500">
                        Annual visitors: {new Intl.NumberFormat('en-IN').format(site.yearlyVisitors)}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        
        {/* Site list */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-800 mr-2" />
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {filteredSites.length} Cultural Sites {selectedType !== 'all' && `(${selectedType})`}
              </h3>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {filteredSites.map(site => (
              <li key={site.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-blue-800 truncate">{site.name}</p>
                    <p className="text-sm text-gray-500 truncate">{site.location}, {site.stateName}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {site.type}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{site.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapPage;