import React from "react";
import { Item } from "../lib/types";
import { Link } from "react-router-dom";

interface CardProps {
  item: Item;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex gap-5">

      {/* IMAGE SECTION */}
      <Link to={`${item.id}`} className="h-48 w-2/5">
        <img
          src={item.img}
          alt=""
          className="h-full w-full rounded-lg border object-cover"
        />
      </Link>

      {/* INFO SECTION */}
      <div className="flex w-3/5 flex-col justify-between gap-2">
        <h2 className="text-xl font-semibold text-gray-800 transition-all duration-300 hover:scale-[101%] hover:text-black">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="flex items-center gap-1 text-sm text-gray-600">
          <img className="h-4 w-4" src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="w-fit rounded bg-yellow-200 p-1 text-xl font-light">
          $ {item.price}
        </p>
        <div className="flex justify-between gap-2">
          <div className="flex gap-5 text-sm">
            <div className="g-1 flex items-center rounded bg-gray-100 p-1">
              <img className="h-4 w-4" src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="g-1 flex items-center rounded bg-gray-100 p-1">
              <img className="h-4 w-4" src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="g-5 flex">
            <div className="flex cursor-pointer items-center justify-center rounded border p-1 hover:bg-slate-200">
              <img className="h-4 w-4" src="/save.png" alt="" />
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded border p-1 hover:bg-slate-200">
              <img className="h-4 w-4" src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
