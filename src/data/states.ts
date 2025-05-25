import { State } from '../types';

export const states: State[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Known as the "Land of Kings", Rajasthan is famous for its majestic palaces, formidable forts, and vibrant culture. The state offers a rich tapestry of music, dance, and art set against the backdrop of the Thar Desert.',
    imageUrl: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    artForms: [
      {
        id: 'rajasthan-painting-1',
        name: 'Phad Painting',
        category: 'painting',
        description: 'Phad painting is a style of religious scroll painting practiced in Rajasthan. These scroll paintings depict folk deities and their legends.',
        imageUrl: 'https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg',
        originState: 'Rajasthan'
      },
      {
        id: 'rajasthan-dance-1',
        name: 'Ghoomar',
        category: 'dance',
        description: 'Ghoomar is a traditional folk dance of Rajasthan performed by women. It involves graceful pirouetting while the full skirt flares out, creating a colorful spectacle.',
        imageUrl: 'https://images.pexels.com/photos/9376125/pexels-photo-9376125.jpeg',
        originState: 'Rajasthan'
      },
      {
        id: 'rajasthan-music-1',
        name: 'Manganiyar Music',
        category: 'music',
        description: 'Manganiyar is a Muslim community of hereditary professional musicians whose music has been supported by wealthy landlords and aristocrats for generations.',
        imageUrl: 'https://images.pexels.com/photos/2909367/pexels-photo-2909367.jpeg',
        originState: 'Rajasthan'
      }
    ],
    festivals: [
      {
        id: 'rajasthan-festival-1',
        name: 'Pushkar Camel Fair',
        description: 'An annual camel and livestock fair held in the town of Pushkar. It is one of the world\'s largest camel fairs.',
        date: 'November',
        imageUrl: 'https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg',
        location: 'Pushkar'
      },
      {
        id: 'rajasthan-festival-2',
        name: 'Desert Festival',
        description: 'A colorful festival organized in the golden city of Jaisalmer that showcases the rich cultural heritage of the desert state.',
        date: 'February',
        imageUrl: 'https://images.pexels.com/photos/1751682/pexels-photo-1751682.jpeg',
        location: 'Jaisalmer'
      }
    ],
    tourismStats: {
      domesticVisitors: 45200000,
      foreignVisitors: 1600000,
      yearlyGrowth: 8.5,
      popularSeason: 'October to March'
    },
    culturalSites: [
      {
        id: 'rajasthan-site-1',
        name: 'Amber Fort',
        description: 'A majestic fort overlooking Maota Lake, known for its artistic style elements blending both Hindu and Muslim architecture.',
        imageUrl: 'https://images.pexels.com/photos/3581353/pexels-photo-3581353.jpeg',
        location: 'Jaipur',
        latitude: 26.9855,
        longitude: 75.8513,
        yearlyVisitors: 1200000,
        type: 'monument'
      },
      {
        id: 'rajasthan-site-2',
        name: 'City Palace',
        description: 'A complex of courtyards, gardens and buildings blending Rajasthani and Mughal architecture in the heart of the old city.',
        imageUrl: 'https://images.pexels.com/photos/3581475/pexels-photo-3581475.jpeg',
        location: 'Udaipur',
        latitude: 24.5765,
        longitude: 73.6822,
        yearlyVisitors: 900000,
        type: 'monument'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    description: 'Known as "God\'s Own Country", Kerala is famous for its ecotourism initiatives and unique culture and traditions. It has a diverse geography featuring hill stations, backwaters, beaches, and wildlife sanctuaries.',
    imageUrl: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
    artForms: [
      {
        id: 'kerala-dance-1',
        name: 'Kathakali',
        category: 'dance',
        description: 'Kathakali is a major form of classical Indian dance-drama noted for its attractive make-up of characters, elaborate costumes, detailed gestures, and well-defined body movements.',
        imageUrl: 'https://images.pexels.com/photos/2886266/pexels-photo-2886266.jpeg',
        originState: 'Kerala'
      },
      {
        id: 'kerala-craft-1',
        name: 'Aranmula Kannadi',
        category: 'craft',
        description: 'A handmade metal mirror made of an alloy of copper and tin. The exact metals and their ratio remain a closely guarded secret with the craftsmen.',
        imageUrl: 'https://images.pexels.com/photos/4386459/pexels-photo-4386459.jpeg',
        originState: 'Kerala'
      }
    ],
    festivals: [
      {
        id: 'kerala-festival-1',
        name: 'Onam',
        description: 'A harvest festival celebrated by Malayalis. It commemorates King Mahabali and Vamana and includes various festivities.',
        date: 'August-September',
        imageUrl: 'https://images.pexels.com/photos/1134062/pexels-photo-1134062.jpeg',
        location: 'Throughout Kerala'
      }
    ],
    tourismStats: {
      domesticVisitors: 18400000,
      foreignVisitors: 1090000,
      yearlyGrowth: 5.9,
      popularSeason: 'September to March'
    },
    culturalSites: [
      {
        id: 'kerala-site-1',
        name: 'Padmanabhapuram Palace',
        description: 'A magnificent wooden palace with typical Kerala architecture, featuring exquisite woodwork and traditional Kerala murals.',
        imageUrl: 'https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg',
        location: 'Thuckalay',
        latitude: 8.2526,
        longitude: 77.3335,
        yearlyVisitors: 600000,
        type: 'monument'
      }
    ]
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    description: 'West Bengal is a state that offers a remarkable variety of attractions, from the Himalayan hill stations to the Sundarbans mangrove forests. The state is known for its rich cultural heritage, literature, and art.',
    imageUrl: 'https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg',
    artForms: [
      {
        id: 'west-bengal-painting-1',
        name: 'Kalighat Painting',
        category: 'painting',
        description: 'A style of painting that originated in the 19th century Bengal, in the vicinity of the Kalighat Kali Temple. These paintings were done on cloth or patas.',
        imageUrl: 'https://images.pexels.com/photos/6507357/pexels-photo-6507357.jpeg',
        originState: 'West Bengal'
      },
      {
        id: 'west-bengal-dance-1',
        name: 'Chhau Dance',
        category: 'dance',
        description: 'A semi-classical Indian dance with martial, tribal, and folk origins. The dance is mainly performed during festivals in the region of Purulia.',
        imageUrl: 'https://images.pexels.com/photos/4388285/pexels-photo-4388285.jpeg',
        originState: 'West Bengal'
      }
    ],
    festivals: [
      {
        id: 'west-bengal-festival-1',
        name: 'Durga Puja',
        description: 'The biggest festival of the state, it celebrates the victory of Goddess Durga over the demon Mahishasura.',
        date: 'September-October',
        imageUrl: 'https://images.pexels.com/photos/5996925/pexels-photo-5996925.jpeg',
        location: 'Throughout West Bengal'
      }
    ],
    tourismStats: {
      domesticVisitors: 85600000,
      foreignVisitors: 1600000,
      yearlyGrowth: 6.2,
      popularSeason: 'October to March'
    },
    culturalSites: [
      {
        id: 'west-bengal-site-1',
        name: 'Victoria Memorial',
        description: 'A large marble building built between 1906 and 1921, dedicated to the memory of Queen Victoria.',
        imageUrl: 'https://images.pexels.com/photos/5502666/pexels-photo-5502666.jpeg',
        location: 'Kolkata',
        latitude: 22.5448,
        longitude: 88.3426,
        yearlyVisitors: 3500000,
        type: 'monument'
      }
    ]
  }
];