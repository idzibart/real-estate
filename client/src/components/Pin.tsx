import React from "react";
import { Marker, Popup } from "react-leaflet";
import { PinProps, Item, SinglePost } from "../lib/types";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Pin = ({ item }: PinProps) => {
  // CHECK WHAT TYPE
  const isItem = (item: Item | SinglePost): item is Item => "img" in item && "bedroom" in item;

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        {isItem(item) ? (
          <div className="flex gap-5">
            <img
              src={item.img} // Bezpiecznie używamy item.img, bo wiemy, że to Item
              alt=""
              className="h-12 w-16 rounded object-cover"
            />
            <div className="flex flex-col justify-between">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span>{item.bedroom} bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <span>{item.title}</span>
            {/* Możesz dostosować renderowanie dla SinglePost */}
            <p>{item.description}</p>
            <b>$ {item.price}</b>
          </div>
        )}
      </Popup>
    </Marker>
  );
};

export default Pin;
