import React from "react";
import { listData } from "../lib/dummydata";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";

const List = () => {
  const data = listData;
  return (
    <div className="flex h-full">
      {/* LIST CONTAINER*/}
      <div className="w-3/5">
        <div className="flex h-full flex-col gap-10 overflow-y-scroll pb-10 pr-10">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* MAP CONTAINER */}
      <div className="h-full w-2/5 bg-secondary">
        <Map items={data} />
      </div>
    </div>
  );
};

export default List;
