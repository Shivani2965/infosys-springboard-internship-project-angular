export interface Destination {
  id: number;
  name: string;
  location: string;
  state: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  popularity: number;
  travelers: string;
  duration: string;
  packageDetails: string[];
  hotel: {
    name: string;
    rating: number;
    pricePerNight: number;
    image: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}