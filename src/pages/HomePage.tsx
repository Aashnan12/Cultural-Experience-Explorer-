import React from 'react';
import Hero from '../components/Hero';
import FeaturedStates from '../components/FeaturedStates';
import ArtCategories from '../components/ArtCategories';
import ResponsibleTourism from '../components/ResponsibleTourism';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedStates />
      <ArtCategories />
      <ResponsibleTourism />
    </div>
  );
};

export default HomePage;