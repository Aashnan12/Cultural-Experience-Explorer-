import { TourismGuideline } from '../types';

export const tourismGuidelines: TourismGuideline[] = [
  {
    id: 'eco-1',
    title: 'Minimize Plastic Usage',
    description: 'Carry a reusable water bottle and cloth shopping bags to reduce plastic waste in ecologically sensitive areas.',
    category: 'eco-friendly',
    iconName: 'leaf'
  },
  {
    id: 'eco-2',
    title: 'Conserve Water',
    description: 'Take shorter showers and reuse hotel towels to reduce water consumption, especially in water-scarce regions.',
    category: 'eco-friendly',
    iconName: 'droplet'
  },
  {
    id: 'cultural-1',
    title: 'Dress Appropriately',
    description: 'Respect local customs by dressing modestly when visiting religious sites and traditional communities.',
    category: 'cultural-respect',
    iconName: 'shirt'
  },
  {
    id: 'cultural-2',
    title: 'Ask Before Photographing',
    description: 'Always seek permission before taking photos of individuals, particularly in tribal areas and religious ceremonies.',
    category: 'cultural-respect',
    iconName: 'camera'
  },
  {
    id: 'sustainable-1',
    title: 'Support Local Artisans',
    description: 'Purchase handicrafts directly from local artisans to ensure they receive fair compensation for their work.',
    category: 'sustainable',
    iconName: 'paintbrush'
  },
  {
    id: 'sustainable-2',
    title: 'Choose Local Accommodations',
    description: 'Stay in locally-owned guesthouses and homestays to contribute directly to the community economy.',
    category: 'sustainable',
    iconName: 'home'
  },
  {
    id: 'safety-1',
    title: 'Research Local Conditions',
    description: 'Stay informed about weather patterns, political situations, and health advisories before and during your trip.',
    category: 'safety',
    iconName: 'shield'
  },
  {
    id: 'safety-2',
    title: 'Register with Local Authorities',
    description: 'For treks and remote area visits, inform local authorities about your itinerary for safety purposes.',
    category: 'safety',
    iconName: 'clipboard-list'
  }
];