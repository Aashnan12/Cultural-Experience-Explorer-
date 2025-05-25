export interface State {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  artForms: ArtForm[];
  festivals: Festival[];
  tourismStats: TourismStats;
  culturalSites: CulturalSite[];
}

export interface ArtForm {
  id: string;
  name: string;
  category: 'painting' | 'dance' | 'music' | 'craft';
  description: string;
  imageUrl: string;
  originState: string;
}

export interface Festival {
  id: string;
  name: string;
  description: string;
  date: string;
  imageUrl: string;
  location: string;
}

export interface TourismStats {
  domesticVisitors: number;
  foreignVisitors: number;
  yearlyGrowth: number;
  popularSeason: string;
}

export interface CulturalSite {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  latitude: number;
  longitude: number;
  yearlyVisitors: number;
  type: 'monument' | 'temple' | 'museum' | 'natural' | 'other';
}

export interface TourismGuideline {
  id: string;
  title: string;
  description: string;
  category: 'eco-friendly' | 'cultural-respect' | 'sustainable' | 'safety';
  iconName: string;
}