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
  items: Item[];
}

export interface PinProps {
  item: Item;
}
