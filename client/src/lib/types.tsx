export interface SinglePost {
  id: number;
  title: string;
  price: number;
  images: string[];
  bedRooms: number;
  bathroom: number;
  size: number;
  latitude: number;
  longitude: number;
  city: string;
  address: string;
  school: string;
  bus: string;
  restaurant: string;
  description: string;
}
export interface Item {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

export interface QueryState {
  type: "buy" | "rent";
  location: string;
  maxPrice: string;
  minPrice: string;
}

export interface MapProps {
  items: Item[] | SinglePost[];
}

export interface PinProps {
  item: Item | SinglePost;
}

export interface SliderProps {
  images: string[];
}

export interface FormData {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
}
