import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { states } from '../data/states';
import { State, ArtForm, Festival, CulturalSite } from '../types';
import { ChevronLeft, Calendar, Users, TrendingUp, Sun } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StateDetailPage: React.FC = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const [state, setState] = useState<State | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'artforms' | 'festivals' | 'sites'>('overview');
  const [selectedItem, setSelectedItem] = useState<ArtForm | Festival | CulturalSite | null>(null);

  useEffect(() => {
    if (stateId) {
      const foundState = states.find(s => s.id === stateId);
      if (foundState) {
        setState(foundState);
      }
    }
  }, [stateId]);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">State not found.</p>
      </div>
    );
  }

  // Prepare data for tourism stats chart
  const chartData = {
    labels: ['Domestic', 'Foreign'],
    datasets: [
      {
        label: 'Visitors',
        data: [state.tourismStats.domesticVisitors, state.tourismStats.foreignVisitors],
        backgroundColor: ['#3B82F6', '#10B981'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Annual Visitor Statistics',
      },
    },
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6">
          <Link to="/states" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to all states
          </Link>
        </div>
        
        {/* Header with hero image */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <div className="h-96 w-full">
            <img 
              src={state.imageUrl} 
              alt={state.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{state.name}</h1>
            <p className="text-white/90 text-lg max-w-2xl">{state.description}</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('artforms')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'artforms'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Art Forms
              </button>
              <button
                onClick={() => setActiveTab('festivals')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'festivals'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Festivals
              </button>
              <button
                onClick={() => setActiveTab('sites')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'sites'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Cultural Sites
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="p-6">
            {/* Overview tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Tourism stats */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Tourism Statistics</h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 text-blue-500 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Domestic Visitors</span>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{formatNumber(state.tourismStats.domesticVisitors)}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Foreign Visitors</span>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{formatNumber(state.tourismStats.foreignVisitors)}</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Yearly Growth</span>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{state.tourismStats.yearlyGrowth}%</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                          <span className="text-sm font-medium text-gray-500">Popular Season</span>
                        </div>
                        <p className="text-xl font-bold text-gray-900">{state.tourismStats.popularSeason}</p>
                      </div>
                    </div>
                    <div className="h-64">
                      <Bar options={chartOptions} data={chartData} />
                    </div>
                  </div>
                  
                  {/* Cultural highlights */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Cultural Highlights</h2>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="px-4 py-5 sm:p-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Art Forms</dt>
                            <dd className="mt-1 text-lg font-semibold text-gray-900">
                              {state.artForms.length} traditional art forms
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Festivals</dt>
                            <dd className="mt-1 text-lg font-semibold text-gray-900">
                              {state.festivals.length} major cultural festivals
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Cultural Sites</dt>
                            <dd className="mt-1 text-lg font-semibold text-gray-900">
                              {state.culturalSites.length} significant sites
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Travel Tips</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">Best visited during {state.tourismStats.popularSeason}.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">Check festival dates before planning your trip.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">Consider hiring a local guide for cultural context.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">Support local artisans by purchasing authentic crafts.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Art Forms tab */}
            {activeTab === 'artforms' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Traditional Art Forms</h2>
                {state.artForms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {state.artForms.map((artForm) => (
                      <div 
                        key={artForm.id}
                        onClick={() => setSelectedItem(artForm)}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition duration-200"
                      >
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={artForm.imageUrl} 
                            alt={artForm.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{artForm.name}</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {artForm.category}
                            </span>
                          </div>
                          <p className="text-gray-600 line-clamp-2">{artForm.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No art forms available for this state.</p>
                )}
              </div>
            )}
            
            {/* Festivals tab */}
            {activeTab === 'festivals' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Cultural Festivals</h2>
                {state.festivals.length > 0 ? (
                  <div className="space-y-6">
                    {state.festivals.map((festival) => (
                      <div 
                        key={festival.id}
                        onClick={() => setSelectedItem(festival)}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition duration-200"
                      >
                        <div className="md:flex">
                          <div className="md:shrink-0 h-48 md:h-auto md:w-48">
                            <img 
                              src={festival.imageUrl} 
                              alt={festival.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{festival.name}</h3>
                              <div className="ml-4 flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                {festival.date}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-2">{festival.description}</p>
                            <p className="text-sm text-gray-500">Location: {festival.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No festivals available for this state.</p>
                )}
              </div>
            )}
            
            {/* Cultural Sites tab */}
            {activeTab === 'sites' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Cultural Sites</h2>
                {state.culturalSites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {state.culturalSites.map((site) => (
                      <div 
                        key={site.id}
                        onClick={() => setSelectedItem(site)}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition duration-200"
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={site.imageUrl} 
                            alt={site.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{site.name}</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {site.type}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2 line-clamp-2">{site.description}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>Location: {site.location}</span>
                            <span>{formatNumber(site.yearlyVisitors)} visitors/year</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No cultural sites available for this state.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal for selected item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="h-64 w-full overflow-hidden">
              <img 
                src={(selectedItem as any).imageUrl}
                alt={(selectedItem as any).name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{(selectedItem as any).name}</h2>
                {'category' in selectedItem && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedItem.category}
                  </span>
                )}
                {'type' in selectedItem && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedItem.type}
                  </span>
                )}
              </div>
              
              {'date' in selectedItem && (
                <div className="flex items-center mb-4 text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {selectedItem.date}
                </div>
              )}
              
              <p className="text-gray-600 mb-6">{(selectedItem as any).description}</p>
              
              {'location' in selectedItem && (
                <p className="text-sm text-gray-500 mb-4">
                  Location: {selectedItem.location}
                </p>
              )}
              
              {'yearlyVisitors' in selectedItem && (
                <p className="text-sm text-gray-500 mb-4">
                  Annual visitors: {formatNumber(selectedItem.yearlyVisitors)}
                </p>
              )}
              
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
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

export default StateDetailPage;