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
      <div className="w-3/5">
        <h2>
          <Link to={`${item.id}`}>{item.title}</Link>
        </h2>
        <p>
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p>$ {item.price}</p>
        <div>
          <div>
            <div>
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div>
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div>
            <div>
              <img src="/save.png" alt="" />
            </div>
            <div>
              <img src="/.chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
