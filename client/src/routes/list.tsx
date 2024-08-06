import React from "react";
import { listData } from "../lib/dummydata";
import Filter from "../components/Filter";
import Card from "../components/Card";

const List = () => {
  const data = listData;
  return (
    <div className="flex h-full">
      {/* LIST CONTAINER*/}
      <div className="w-3/5">
        <div className="pr-10">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* MAP CONTAINER */}
      <div className="w-2/5 bg-secondary">MAP</div>
    </div>
  );
};

export default List;
