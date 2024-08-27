import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapProps } from "../lib/types";
import Pin from "./Pin";

const position: LatLngTuple = [51.505, -0.09];

const Map = ({ items }: MapProps) => {
  const normalizedItems = Array.isArray(items) ? items : [items];

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
      {normalizedItems.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
