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
            className={`border px-9 py-4 capitalize first:rounded-tl-md last:rounded-tr-md md:border-b-0 md:first:border-r-0 md:last:border-l-0 ${query.type === type ? "bg-black text-white" : "bg-white"}`}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="flex flex-col justify-between gap-1 border-0 md:h-16 md:flex-row md:border [&>*]:border-0 [&>input]:border [&>input]:p-5 md:[&>input]:w-[170px] md:[&>input]:border-0 lg:[&>input]:w-[110px] xl:[&>input]:w-[160px] xl:[&>input]:px-2">
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
        <button className="bg-primary flex flex-1 items-center justify-center p-2 md:p-0">
          <img src="search.png" alt="" className="h-8 w-8 text-white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
