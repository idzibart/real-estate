import React from "react";
import { Marker, Popup } from "react-leaflet";
import { PinProps } from "../lib/types";

const Pin = ({ item }: PinProps) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default Pin;
