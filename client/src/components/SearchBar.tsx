import React, { useState } from "react";

interface QueryState {
  type: "buy" | "rent";
  location: string;
  maxPrice: string;
  minPrice: string;
}

const types: Array<"buy" | "rent"> = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState<QueryState>({
    type: "buy",
    location: "",
    maxPrice: "0",
    minPrice: "0",
  });

  const switchType = (val: "buy" | "rent") => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="w-full">
      <div>
        {types.map((type) => (
          <button
            className={`border border-b-0 px-9 py-4 capitalize first:rounded-tl-md first:border-r-0 last:rounded-tr-md last:border-l-0 ${query.type === type ? "bg-black text-white" : "bg-white"}`}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="flex h-16 justify-between gap-1 border [&>*]:border-0 [&>input]:px-1 xl:[&>input]:px-2 [&>input]:w-1/4">
        <input type="text" name="location" placeholder="City location" />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="minPrice"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="maxPrice"
        />
        <button className="bg-primary w-16 items-center justify-center flex">
          <img src="search.png" alt="" className="h-8 w-8 p-1 text-white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
