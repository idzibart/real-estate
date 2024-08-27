import React from "react";
import { listData } from "../lib/dummydata";
import Card from "./Card";

const UserList = () => {
  return (
    <div className="flex flex-col gap-12">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserList;
