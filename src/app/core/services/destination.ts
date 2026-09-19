import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private destinations: Destination[] = [
    {
      id: 1,
      name: 'Manali',
      location: 'Manali, Himachal Pradesh',
      state: 'Himachal Pradesh',
      category: 'Hill Station',
      description:
        'A beautiful Himalayan escape known for snow-capped mountains, valleys and adventure activities.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80',
      price: 18999,
      rating: 4.8,
      popularity: 95,
      travelers: '2–6',
      duration: '5 Days / 4 Nights',
      packageDetails: [
        'Hotel accommodation',
        'Daily breakfast',
        'Local sightseeing',
        'Solang Valley excursion',
        'Airport / bus transfer'
      ],
      hotel: {
        name: 'Mountain View Resort',
        rating: 4.5,
        pricePerNight: 3500,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 32.2432, lng: 77.1892 }
    },

    {
      id: 2,
      name: 'Goa',
      location: 'North Goa, Goa',
      state: 'Goa',
      category: 'Beach',
      description:
        'A vibrant coastal destination famous for beaches, nightlife, Portuguese heritage and relaxed escapes.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 15999,
      rating: 4.7,
      popularity: 98,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Beachside hotel',
        'Daily breakfast',
        'North Goa sightseeing',
        'Water sports',
        'Airport transfer'
      ],
      hotel: {
        name: 'Palm Grove Resort',
        rating: 4.4,
        pricePerNight: 4200,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 15.2993, lng: 74.1240 }
    },

    {
      id: 3,
      name: 'Leh',
      location: 'Leh, Ladakh',
      state: 'Ladakh',
      category: 'Adventure',
      description:
        'Experience dramatic Himalayan landscapes, monasteries and unforgettable high-altitude adventures.',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
      price: 24999,
      rating: 4.9,
      popularity: 91,
      travelers: '2–6',
      duration: '6 Days / 5 Nights',
      packageDetails: [
        'Hotel accommodation',
        'Breakfast and dinner',
        'Pangong Lake trip',
        'Nubra Valley excursion',
        'Local transport'
      ],
      hotel: {
        name: 'Himalayan Retreat',
        rating: 4.6,
        pricePerNight: 4800,
        image:
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 34.1526, lng: 77.5771 }
    },

    {
      id: 4,
      name: 'Nainital',
      location: 'Nainital, Uttarakhand',
      state: 'Uttarakhand',
      category: 'Hill Station',
      description:
        'A peaceful Himalayan town centered around the beautiful Naini Lake and surrounded by green hills.',
      image:
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.6,
      popularity: 88,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Lake-view hotel',
        'Breakfast',
        'Naini Lake boating',
        'Local sightseeing',
        'Private cab'
      ],
      hotel: {
        name: 'Lakeview Heights',
        rating: 4.3,
        pricePerNight: 3000,
        image:
          'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 29.3919, lng: 79.4542 }
    },

    {
      id: 5,
      name: 'Munnar',
      location: 'Munnar, Kerala',
      state: 'Kerala',
      category: 'Nature',
      description:
        'Escape into endless tea gardens, misty mountains and peaceful green landscapes.',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      price: 16999,
      rating: 4.8,
      popularity: 90,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Resort stay',
        'Breakfast',
        'Tea plantation tour',
        'Eravikulam National Park',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Tea Valley Resort',
        rating: 4.5,
        pricePerNight: 3800,
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 10.0889, lng: 77.0595 }
    },

    {
      id: 6,
      name: 'Udaipur',
      location: 'Udaipur, Rajasthan',
      state: 'Rajasthan',
      category: 'Heritage',
      description:
        'Discover royal palaces, beautiful lakes and the timeless charm of Rajasthan.',
      image:
        'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80',
      price: 17999,
      rating: 4.7,
      popularity: 86,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Heritage hotel',
        'Breakfast',
        'City Palace visit',
        'Lake Pichola boat ride',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Royal Heritage Palace',
        rating: 4.6,
        pricePerNight: 4500,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 24.5854, lng: 73.7125 }
    },

    {
      id: 7,
      name: 'Rishikesh',
      location: 'Rishikesh, Uttarakhand',
      state: 'Uttarakhand',
      category: 'Adventure',
      description:
        'A perfect combination of spirituality, riverside beauty and thrilling adventure.',
      image:
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.5,
      popularity: 84,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Hotel stay',
        'Breakfast',
        'River rafting',
        'Ganga Aarti',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Ganges Riverside Resort',
        rating: 4.2,
        pricePerNight: 2800,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 30.0869, lng: 78.2676 }
    },

    {
      id: 8,
      name: 'Srinagar',
      location: 'Srinagar, Jammu & Kashmir',
      state: 'Jammu & Kashmir',
      category: 'Nature',
      description:
        'Cruise through Dal Lake, explore Mughal gardens and experience Kashmir’s natural beauty.',
      image:
        'https://images.unsplash.com/photo-1595815771614-ade9d1e8b0b0?auto=format&fit=crop&w=1000&q=80',
      price: 21999,
      rating: 4.9,
      popularity: 94,
      travelers: '2–6',
      duration: '5 Days / 4 Nights',
      packageDetails: [
        'Hotel and houseboat stay',
        'Breakfast',
        'Dal Lake shikara ride',
        'Gulmarg excursion',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Dal Lake Houseboat',
        rating: 4.7,
        pricePerNight: 5000,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 34.0837, lng: 74.7973 }
    },

    {
      id: 9,
      name: 'Shimla',
      location: 'Shimla, Himachal Pradesh',
      state: 'Himachal Pradesh',
      category: 'Hill Station',
      description:
        'A charming Himalayan hill town known for colonial architecture, scenic views and pleasant weather.',
      image:
        'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80',
      price: 14999,
      rating: 4.6,
      popularity: 92,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Hotel accommodation',
        'Breakfast',
        'Mall Road visit',
        'Kufri excursion',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Himalayan Grand Hotel',
        rating: 4.4,
        pricePerNight: 3200,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 31.1048, lng: 77.1734 }
    },

    {
      id: 10,
      name: 'Dharamshala',
      location: 'Dharamshala, Himachal Pradesh',
      state: 'Himachal Pradesh',
      category: 'Nature',
      description:
        'A serene mountain destination surrounded by pine forests, monasteries and spectacular Himalayan views.',
      image:
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.6,
      popularity: 83,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Mountain hotel',
        'Breakfast',
        'McLeod Ganj visit',
        'Dal Lake sightseeing',
        'Private transfers'
      ],
      hotel: {
        name: 'Pine Valley Resort',
        rating: 4.3,
        pricePerNight: 2900,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 32.2190, lng: 76.3234 }
    },

    {
      id: 11,
      name: 'Mussoorie',
      location: 'Mussoorie, Uttarakhand',
      state: 'Uttarakhand',
      category: 'Hill Station',
      description:
        'The Queen of Hills offers peaceful mountain walks, viewpoints and charming colonial streets.',
      image:
        'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.6,
      popularity: 89,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Hotel stay',
        'Breakfast',
        'Mall Road exploration',
        'Kempty Falls visit',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Clouds View Resort',
        rating: 4.4,
        pricePerNight: 3100,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 30.4598, lng: 78.0644 }
    },

    {
      id: 12,
      name: 'Kasol',
      location: 'Kasol, Himachal Pradesh',
      state: 'Himachal Pradesh',
      category: 'Adventure',
      description:
        'A laid-back Himalayan village surrounded by pine forests, rivers and beautiful trekking trails.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
      price: 10999,
      rating: 4.5,
      popularity: 81,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Mountain stay',
        'Breakfast',
        'Kasol village walk',
        'Nature trek',
        'Local transfers'
      ],
      hotel: {
        name: 'Parvati Valley Retreat',
        rating: 4.2,
        pricePerNight: 2400,
        image:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 32.0090, lng: 77.3140 }
    },

    {
      id: 13,
      name: 'Gulmarg',
      location: 'Gulmarg, Jammu & Kashmir',
      state: 'Jammu & Kashmir',
      category: 'Adventure',
      description:
        'A spectacular mountain resort famous for snow activities, meadows and the Gulmarg Gondola.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 22999,
      rating: 4.8,
      popularity: 87,
      travelers: '2–6',
      duration: '5 Days / 4 Nights',
      packageDetails: [
        'Resort accommodation',
        'Breakfast',
        'Gondola experience',
        'Gulmarg sightseeing',
        'Private transfers'
      ],
      hotel: {
        name: 'Snow Valley Resort',
        rating: 4.5,
        pricePerNight: 4600,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 34.0484, lng: 74.3805 }
    },

    {
      id: 14,
      name: 'Jaipur',
      location: 'Jaipur, Rajasthan',
      state: 'Rajasthan',
      category: 'Heritage',
      description:
        'Explore magnificent forts, royal palaces, colourful bazaars and the architectural heritage of Rajasthan.',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
      price: 14999,
      rating: 4.7,
      popularity: 94,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Heritage hotel',
        'Breakfast',
        'Amber Fort visit',
        'City Palace visit',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Pink City Heritage Hotel',
        rating: 4.4,
        pricePerNight: 3400,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.9124, lng: 75.7873 }
    },
    {
      id: 15,
      name: 'Jaisalmer',
      location: 'Jaisalmer, Rajasthan',
      state: 'Rajasthan',
      category: 'Heritage',
      description:
        'Discover the golden city, ancient forts and unforgettable desert landscapes.',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
      price: 16999,
      rating: 4.7,
      popularity: 85,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Heritage stay',
        'Breakfast',
        'Jaisalmer Fort',
        'Desert safari',
        'Camel ride'
      ],
      hotel: {
        name: 'Golden Sand Palace',
        rating: 4.5,
        pricePerNight: 3600,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.9157, lng: 70.9083 }
    },

    {
      id: 16,
      name: 'Mount Abu',
      location: 'Mount Abu, Rajasthan',
      state: 'Rajasthan',
      category: 'Hill Station',
      description:
        'Rajasthan’s peaceful hill station featuring lakes, temples and cool mountain scenery.',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
      price: 12999,
      rating: 4.4,
      popularity: 74,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Hotel stay',
        'Breakfast',
        'Nakki Lake visit',
        'Dilwara Temples',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Aravali Hills Resort',
        rating: 4.2,
        pricePerNight: 2700,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 24.5926, lng: 72.7156 }
    },

    {
      id: 17,
      name: 'Lonavala',
      location: 'Lonavala, Maharashtra',
      state: 'Maharashtra',
      category: 'Nature',
      description:
        'A refreshing Western Ghats getaway famous for waterfalls, valleys and monsoon landscapes.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
      price: 9999,
      rating: 4.5,
      popularity: 91,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Resort stay',
        'Breakfast',
        'Tiger Point visit',
        'Karla Caves',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Valley View Resort',
        rating: 4.3,
        pricePerNight: 2800,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 18.7546, lng: 73.4062 }
    },

    {
      id: 18,
      name: 'Mahabaleshwar',
      location: 'Mahabaleshwar, Maharashtra',
      state: 'Maharashtra',
      category: 'Hill Station',
      description:
        'A scenic hill retreat known for strawberry farms, viewpoints, forests and pleasant weather.',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.5,
      popularity: 86,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Resort accommodation',
        'Breakfast',
        'Pratapgad excursion',
        'Venna Lake',
        'Viewpoint tour'
      ],
      hotel: {
        name: 'Strawberry Hills Resort',
        rating: 4.3,
        pricePerNight: 2900,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 17.9307, lng: 73.6477 }
    },

    {
      id: 19,
      name: 'Alibaug',
      location: 'Alibaug, Maharashtra',
      state: 'Maharashtra',
      category: 'Beach',
      description:
        'A relaxed coastal escape near Mumbai with beaches, forts and beautiful Konkan scenery.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 10999,
      rating: 4.4,
      popularity: 82,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Beach resort',
        'Breakfast',
        'Alibaug Beach',
        'Kolaba Fort',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Konkan Beach Resort',
        rating: 4.2,
        pricePerNight: 3000,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 18.6414, lng: 72.8722 }
    },

  
    {
      id: 20,
      name: 'Kutch',
      location: 'Kutch, Gujarat',
      state: 'Gujarat',
      category: 'Heritage',
      description:
        'Experience the vast White Rann, traditional crafts, colourful culture and desert landscapes.',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
      price: 15999,
      rating: 4.6,
      popularity: 79,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Resort accommodation',
        'Breakfast',
        'Rann of Kutch visit',
        'Cultural village tour',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Rann Desert Resort',
        rating: 4.4,
        pricePerNight: 3900,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 23.7337, lng: 69.8597 }
    },

    {
      id: 21,
      name: 'Diu',
      location: 'Diu, Daman and Diu',
      state: 'Daman and Diu',
      category: 'Beach',
      description:
        'A peaceful island destination with Portuguese architecture, beaches and historic forts.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 12999,
      rating: 4.4,
      popularity: 70,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Beach hotel',
        'Breakfast',
        'Diu Fort',
        'Nagoa Beach',
        'Island sightseeing'
      ],
      hotel: {
        name: 'Coastal Breeze Resort',
        rating: 4.2,
        pricePerNight: 2900,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 20.7141, lng: 70.9870 }
    },

    {
      id: 22,
      name: 'Ooty',
      location: 'Ooty, Tamil Nadu',
      state: 'Tamil Nadu',
      category: 'Hill Station',
      description:
        'A picturesque Nilgiri hill station surrounded by tea gardens, lakes and misty mountain views.',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.6,
      popularity: 88,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Hill resort',
        'Breakfast',
        'Ooty Lake',
        'Tea garden visit',
        'Nilgiri train experience'
      ],
      hotel: {
        name: 'Nilgiri Valley Resort',
        rating: 4.4,
        pricePerNight: 3200,
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 11.4064, lng: 76.6932 }
    },

    {
      id: 23,
      name: 'Coorg',
      location: 'Coorg, Karnataka',
      state: 'Karnataka',
      category: 'Nature',
      description:
        'A lush coffee-growing region filled with plantations, waterfalls and peaceful forest landscapes.',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      price: 14999,
      rating: 4.7,
      popularity: 87,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Plantation resort',
        'Breakfast',
        'Coffee plantation tour',
        'Abbey Falls',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Coffee Estate Retreat',
        rating: 4.5,
        pricePerNight: 3600,
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 12.3375, lng: 75.8069 }
    },
    {
      id: 24,
      name: 'Wayanad',
      location: 'Wayanad, Kerala',
      state: 'Kerala',
      category: 'Nature',
      description:
        'Explore lush forests, waterfalls, caves and wildlife in Kerala’s scenic Western Ghats.',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      price: 14999,
      rating: 4.6,
      popularity: 82,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Nature resort',
        'Breakfast',
        'Edakkal Caves',
        'Waterfall visit',
        'Wildlife experience'
      ],
      hotel: {
        name: 'Wayanad Forest Resort',
        rating: 4.4,
        pricePerNight: 3500,
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 11.6854, lng: 76.1320 }
    },

    {
      id: 25,
      name: 'Alleppey',
      location: 'Alappuzha, Kerala',
      state: 'Kerala',
      category: 'Nature',
      description:
        'Glide through peaceful Kerala backwaters aboard a traditional houseboat surrounded by tropical scenery.',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      price: 17999,
      rating: 4.8,
      popularity: 93,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Houseboat stay',
        'All meals',
        'Backwater cruise',
        'Village visit',
        'Private transfers'
      ],
      hotel: {
        name: 'Kerala Backwater Houseboat',
        rating: 4.6,
        pricePerNight: 4500,
        image:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 9.4981, lng: 76.3388 }
    },

    {
      id: 26,
      name: 'Varkala',
      location: 'Varkala, Kerala',
      state: 'Kerala',
      category: 'Beach',
      description:
        'A coastal retreat known for dramatic cliffs, golden beaches and peaceful sunsets.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.7,
      popularity: 80,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Beach resort',
        'Breakfast',
        'Varkala Beach',
        'Cliff walk',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Cliffside Beach Resort',
        rating: 4.4,
        pricePerNight: 3300,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 8.7379, lng: 76.7163 }
    },

    {
      id: 27,
      name: 'Kodaikanal',
      location: 'Kodaikanal, Tamil Nadu',
      state: 'Tamil Nadu',
      category: 'Hill Station',
      description:
        'A tranquil hill station surrounded by forests, misty valleys and beautiful lakes.',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.6,
      popularity: 79,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Hill resort',
        'Breakfast',
        'Kodaikanal Lake',
        'Coaker’s Walk',
        'Pillar Rocks'
      ],
      hotel: {
        name: 'Misty Hills Resort',
        rating: 4.3,
        pricePerNight: 3000,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 10.2381, lng: 77.4892 }
    },

    {
      id: 28,
      name: 'Hampi',
      location: 'Hampi, Karnataka',
      state: 'Karnataka',
      category: 'Heritage',
      description:
        'Walk through the remarkable ruins, temples and boulder landscapes of the Vijayanagara Empire.',
      image:
        'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80',
      price: 12999,
      rating: 4.8,
      popularity: 84,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Heritage stay',
        'Breakfast',
        'Virupaksha Temple',
        'Vittala Temple',
        'Guided heritage tour'
      ],
      hotel: {
        name: 'Hampi Heritage Inn',
        rating: 4.3,
        pricePerNight: 2800,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 15.3350, lng: 76.4600 }
    },

    {
      id: 29,
      name: 'Gokarna',
      location: 'Gokarna, Karnataka',
      state: 'Karnataka',
      category: 'Beach',
      description:
        'A laid-back coastal destination with beautiful beaches, temples and scenic walking trails.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.6,
      popularity: 83,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Beach stay',
        'Breakfast',
        'Om Beach',
        'Kudle Beach',
        'Temple visit'
      ],
      hotel: {
        name: 'Coastal Sands Resort',
        rating: 4.3,
        pricePerNight: 2800,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 14.5479, lng: 74.3188 }
    },

    {
      id: 30,
      name: 'Pondicherry',
      location: 'Puducherry, India',
      state: 'Puducherry',
      category: 'Beach',
      description:
        'A charming coastal town blending French-inspired streets, cafés, beaches and heritage architecture.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.6,
      popularity: 88,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Boutique hotel',
        'Breakfast',
        'French Quarter tour',
        'Promenade Beach',
        'Auroville visit'
      ],
      hotel: {
        name: 'French Quarter Heritage Stay',
        rating: 4.4,
        pricePerNight: 3500,
        image:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 11.9416, lng: 79.8083 }
    },

    {
      id: 31,
      name: 'Darjeeling',
      location: 'Darjeeling, West Bengal',
      state: 'West Bengal',
      category: 'Hill Station',
      description:
        'A scenic Himalayan town famous for tea gardens, mountain views and the historic toy train.',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
      price: 15999,
      rating: 4.8,
      popularity: 91,
      travelers: '2–6',
      duration: '5 Days / 4 Nights',
      packageDetails: [
        'Mountain hotel',
        'Breakfast',
        'Tiger Hill sunrise',
        'Tea garden visit',
        'Toy train experience'
      ],
      hotel: {
        name: 'Himalayan Tea Estate Hotel',
        rating: 4.5,
        pricePerNight: 3500,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 27.0410, lng: 88.2663 }
    },
    {
      id: 32,
      name: 'Gangtok',
      location: 'Gangtok, Sikkim',
      state: 'Sikkim',
      category: 'Nature',
      description:
        'A beautiful Himalayan city offering monasteries, mountain views and peaceful valleys.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80',
      price: 16999,
      rating: 4.7,
      popularity: 86,
      travelers: '2–6',
      duration: '5 Days / 4 Nights',
      packageDetails: [
        'Hotel stay',
        'Breakfast',
        'Tsomgo Lake excursion',
        'Rumtek Monastery',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Sikkim Valley Resort',
        rating: 4.4,
        pricePerNight: 3400,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 27.3389, lng: 88.6065 }
    },
    {
      id: 33,
      name: 'Shillong',
      location: 'Shillong, Meghalaya',
      state: 'Meghalaya',
      category: 'Nature',
      description:
        'Explore rolling green hills, waterfalls, pine forests and the unique culture of Meghalaya.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
      price: 15999,
      rating: 4.7,
      popularity: 80,
      travelers: '2–6',
      duration: '5 Days / 4 Nights',
      packageDetails: [
        'Hill hotel',
        'Breakfast',
        'Waterfall tour',
        'Shillong Peak',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Pine Forest Resort',
        rating: 4.3,
        pricePerNight: 3300,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 25.5788, lng: 91.8933 }
    },

    {
      id: 34,
      name: 'Cherrapunji',
      location: 'Cherrapunji, Meghalaya',
      state: 'Meghalaya',
      category: 'Nature',
      description:
        'Discover dramatic cliffs, waterfalls, caves and lush landscapes in the heart of Meghalaya.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
      price: 16999,
      rating: 4.7,
      popularity: 77,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Eco resort',
        'Breakfast',
        'Nohkalikai Falls',
        'Mawsmai Caves',
        'Living root bridge visit'
      ],
      hotel: {
        name: 'Meghalaya Eco Retreat',
        rating: 4.3,
        pricePerNight: 3100,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 25.2840, lng: 91.7210 }
    },
    {
      id: 35,
      name: 'Tawang',
      location: 'Tawang, Arunachal Pradesh',
      state: 'Arunachal Pradesh',
      category: 'Adventure',
      description:
        'A remote Himalayan destination known for monasteries, mountain passes and spectacular scenery.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80',
      price: 22999,
      rating: 4.8,
      popularity: 72,
      travelers: '2–6',
      duration: '6 Days / 5 Nights',
      packageDetails: [
        'Mountain hotel',
        'Breakfast and dinner',
        'Tawang Monastery',
        'Sela Pass excursion',
        'Private vehicle'
      ],
      hotel: {
        name: 'Himalayan Tawang Retreat',
        rating: 4.4,
        pricePerNight: 3600,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 27.5860, lng: 91.8590 }
    },

  
    {
      id: 36,
      name: 'Kaziranga',
      location: 'Kaziranga, Assam',
      state: 'Assam',
      category: 'Wildlife',
      description:
        'Experience Assam’s famous national park and its rich wildlife surrounded by lush landscapes.',
      image:
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80',
      price: 18999,
      rating: 4.7,
      popularity: 75,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Jungle resort',
        'Breakfast',
        'Jeep safari',
        'Wildlife excursion',
        'Nature walk'
      ],
      hotel: {
        name: 'Kaziranga Jungle Lodge',
        rating: 4.4,
        pricePerNight: 3800,
        image:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.5775, lng: 93.1711 }
    },
    {
      id: 37,
      name: 'Pelling',
      location: 'Pelling, Sikkim',
      state: 'Sikkim',
      category: 'Nature',
      description:
        'A peaceful Himalayan town offering spectacular Kanchenjunga views, monasteries and forests.',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80',
      price: 15999,
      rating: 4.6,
      popularity: 69,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Mountain resort',
        'Breakfast',
        'Pemayangtse Monastery',
        'Kanchenjunga viewpoints',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Kanchenjunga View Resort',
        rating: 4.3,
        pricePerNight: 3200,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 27.3059, lng: 88.2399 }
    },

    {
      id: 38,
      name: 'Kalimpong',
      location: 'Kalimpong, West Bengal',
      state: 'West Bengal',
      category: 'Hill Station',
      description:
        'A peaceful hill town known for monasteries, gardens, mountain views and colonial charm.',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
      price: 13999,
      rating: 4.5,
      popularity: 67,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Boutique hotel',
        'Breakfast',
        'Deolo Hill',
        'Monastery visit',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Himalayan Garden Resort',
        rating: 4.2,
        pricePerNight: 2900,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 27.0667, lng: 88.4667 }
    },

    {
      id: 39,
      name: 'Puri',
      location: 'Puri, Odisha',
      state: 'Odisha',
      category: 'Beach',
      description:
        'A coastal city known for its golden beach, Jagannath Temple and vibrant cultural heritage.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.5,
      popularity: 84,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Beach hotel',
        'Breakfast',
        'Puri Beach',
        'Temple visit',
        'Konark excursion'
      ],
      hotel: {
        name: 'Golden Beach Resort',
        rating: 4.2,
        pricePerNight: 2700,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 19.8135, lng: 85.8312 }
    },
    {
      id: 40,
      name: 'Varanasi',
      location: 'Varanasi, Uttar Pradesh',
      state: 'Uttar Pradesh',
      category: 'Heritage',
      description:
        'Experience the ancient ghats, timeless culture, evening Ganga Aarti and spiritual traditions of Varanasi.',
      image:
        'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
      price: 12999,
      rating: 4.7,
      popularity: 93,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'City hotel',
        'Breakfast',
        'Ganga Aarti',
        'Boat ride',
        'Heritage walking tour'
      ],
      hotel: {
        name: 'Ganges Heritage Hotel',
        rating: 4.4,
        pricePerNight: 3000,
        image:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 25.3176, lng: 82.9739 }
    },
    {
      id: 41,
      name: 'Agra',
      location: 'Agra, Uttar Pradesh',
      state: 'Uttar Pradesh',
      category: 'Heritage',
      description:
        'Discover the Taj Mahal, Agra Fort and the rich Mughal heritage of this historic city.',
      image:
        'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.7,
      popularity: 95,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Hotel accommodation',
        'Breakfast',
        'Taj Mahal visit',
        'Agra Fort',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Taj Heritage Hotel',
        rating: 4.4,
        pricePerNight: 2900,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 27.1767, lng: 78.0081 }
    },
    {
      id: 42,
      name: 'Khajuraho',
      location: 'Khajuraho, Madhya Pradesh',
      state: 'Madhya Pradesh',
      category: 'Heritage',
      description:
        'Explore remarkable temples decorated with intricate sculptures and centuries-old architecture.',
      image:
        'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80',
      price: 12999,
      rating: 4.6,
      popularity: 68,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Heritage hotel',
        'Breakfast',
        'Temple complex tour',
        'Light and sound show',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Khajuraho Heritage Resort',
        rating: 4.2,
        pricePerNight: 2700,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 24.8318, lng: 79.9199 }
    },

    {
      id: 43,
      name: 'Pachmarhi',
      location: 'Pachmarhi, Madhya Pradesh',
      state: 'Madhya Pradesh',
      category: 'Nature',
      description:
        'A peaceful hill retreat surrounded by forests, waterfalls and sandstone landscapes.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.5,
      popularity: 65,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Hill resort',
        'Breakfast',
        'Bee Falls',
        'Jata Shankar Caves',
        'Nature sightseeing'
      ],
      hotel: {
        name: 'Satpura Valley Resort',
        rating: 4.2,
        pricePerNight: 2600,
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 22.4675, lng: 78.4331 }
    },
    {
      id: 44,
      name: 'Amritsar',
      location: 'Amritsar, Punjab',
      state: 'Punjab',
      category: 'Heritage',
      description:
        'Discover the Golden Temple, historic streets, Punjabi cuisine and important cultural landmarks.',
      image:
        'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80',
      price: 11999,
      rating: 4.7,
      popularity: 90,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'City hotel',
        'Breakfast',
        'Golden Temple visit',
        'Wagah Border excursion',
        'Local food tour'
      ],
      hotel: {
        name: 'Golden City Heritage Hotel',
        rating: 4.4,
        pricePerNight: 2800,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 31.6340, lng: 74.8723 }
    },
    {
      id: 45,
      name: 'Ajmer',
      location: 'Ajmer, Rajasthan',
      state: 'Rajasthan',
      category: 'Heritage',
      description:
        'Explore historic landmarks, lakes and the cultural heritage of this important Rajasthan city.',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
      price: 9999,
      rating: 4.4,
      popularity: 70,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Hotel accommodation',
        'Breakfast',
        'Historic city tour',
        'Ana Sagar Lake',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Ajmer Heritage Hotel',
        rating: 4.1,
        pricePerNight: 2300,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.4499, lng: 74.6399 }
    },
    {
      id: 46,
      name: 'Pushkar',
      location: 'Pushkar, Rajasthan',
      state: 'Rajasthan',
      category: 'Heritage',
      description:
        'A colourful desert town surrounding a sacred lake and known for its vibrant cultural atmosphere.',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
      price: 10999,
      rating: 4.5,
      popularity: 76,
      travelers: '2–6',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'Boutique hotel',
        'Breakfast',
        'Pushkar Lake',
        'Brahma Temple',
        'Desert village tour'
      ],
      hotel: {
        name: 'Pushkar Lake Resort',
        rating: 4.2,
        pricePerNight: 2600,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.4897, lng: 74.5511 }
    },
    {
      id: 47,
      name: 'Ranthambore',
      location: 'Ranthambore, Rajasthan',
      state: 'Rajasthan',
      category: 'Wildlife',
      description:
        'Combine historic ruins with exciting wildlife safaris through one of India’s famous tiger habitats.',
      image:
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80',
      price: 18999,
      rating: 4.7,
      popularity: 78,
      travelers: '2–6',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Jungle resort',
        'Breakfast',
        'Wildlife safari',
        'Ranthambore Fort',
        'Nature excursion'
      ],
      hotel: {
        name: 'Ranthambore Jungle Resort',
        rating: 4.4,
        pricePerNight: 3900,
        image:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.0173, lng: 76.5026 }
    },
    {
      id: 48,
      name: 'Andaman',
      location: 'Port Blair, Andaman and Nicobar Islands',
      state: 'Andaman and Nicobar Islands',
      category: 'Beach',
      description:
        'A tropical island escape featuring turquoise waters, coral reefs, beaches and water activities.',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
      price: 24999,
      rating: 4.9,
      popularity: 92,
      travelers: '2–6',
      duration: '6 Days / 5 Nights',
      packageDetails: [
        'Beach resort',
        'Breakfast',
        'Island hopping',
        'Snorkelling',
        'Airport and ferry transfers'
      ],
      hotel: {
        name: 'Coral Island Resort',
        rating: 4.6,
        pricePerNight: 5200,
        image:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 11.6234, lng: 92.7265 }
    },
    {
      id: 49,
      name: 'Mysore',
      location: 'Mysore, Karnataka',
      state: 'Karnataka',
      category: 'Heritage',
      description:
        'Experience magnificent palaces, gardens, traditional markets and the royal heritage of Mysore.',
      image:
        'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80',
      price: 10999,
      rating: 4.6,
      popularity: 81,
      travelers: '2–8',
      duration: '3 Days / 2 Nights',
      packageDetails: [
        'City hotel',
        'Breakfast',
        'Mysore Palace',
        'Brindavan Gardens',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Royal Mysore Hotel',
        rating: 4.3,
        pricePerNight: 2600,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 12.2958, lng: 76.6394 }
    },
    {
      id: 50,
      name: 'Jodhpur',
      location: 'Jodhpur, Rajasthan',
      state: 'Rajasthan',
      category: 'Heritage',
      description:
        'Explore the Blue City, magnificent Mehrangarh Fort, vibrant bazaars and royal Rajasthani culture.',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
      price: 14999,
      rating: 4.7,
      popularity: 88,
      travelers: '2–8',
      duration: '4 Days / 3 Nights',
      packageDetails: [
        'Heritage hotel',
        'Breakfast',
        'Mehrangarh Fort',
        'Blue City walking tour',
        'Local sightseeing'
      ],
      hotel: {
        name: 'Blue City Heritage Palace',
        rating: 4.5,
        pricePerNight: 3500,
        image:
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
      },
      coordinates: { lat: 26.2389, lng: 73.0243 }
    }
  ];

  getDestinations(): Destination[] {
    return this.destinations;
  }

  getDestinationById(id: number): Destination | undefined {
    return this.destinations.find(
      destination => destination.id === id
    );
  }
}