import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Item, SinglePost, MapProps } from "../lib/types";
import Pin from "./Pin";

const position: LatLngTuple = [51.505, -0.09];

const Map = ({ items }: MapProps) => {
  // FILTER IF Item OR SinglePost BY UNIQUE img OR bedroom
  const filteredItems = (items as (Item | SinglePost)[]).filter(
    (item): item is Item => "img" in item && "bedroom" in item,
  );

  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={false}
      className="h-full w-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredItems.map((item: Item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
