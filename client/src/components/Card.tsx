import React from "react";
import { Item } from "../lib/types";
import { Link } from "react-router-dom";

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex gap-5">
      <Link to={`${item.id}`} className="h-48 w-2/5">
        <img
          src={item.img}
          alt=""
          className="h-full w-full rounded-lg border object-cover"
        />
      </Link>
      <div className="w-3/5">Tekst</div>
    </div>
  );
};

export default Card;
