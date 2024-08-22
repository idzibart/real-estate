import React from "react";
import { Marker, Popup } from "react-leaflet";
import { PinProps } from "../lib/types";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Pin = ({ item }: PinProps) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5">
          <img
            src={item.img}
            alt=""
            className="h-12 w-16 rounded object-cover"
          />
          <div className="flex flex-col justify-between">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
