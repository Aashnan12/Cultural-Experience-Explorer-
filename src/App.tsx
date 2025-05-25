import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtExplorerPage from './pages/ArtExplorerPage';
import StatesPage from './pages/StatesPage';
import StateDetailPage from './pages/StateDetailPage';
import MapPage from './pages/MapPage';
import GuidelinesPage from './pages/GuidelinesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/art-explorer" element={<ArtExplorerPage />} />
            <Route path="/art-explorer/:category" element={<ArtExplorerPage />} />
            <Route path="/states" element={<StatesPage />} />
            <Route path="/states/:stateId" element={<StateDetailPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;