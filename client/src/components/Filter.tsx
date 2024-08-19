import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-light">
        Search result for <b>Polska</b>
      </h1>
      {/* TOP */}
      <div className="w-full">
        <div className="item">
          <label className="label" htmlFor="location">
            Location
          </label>
          <input
            className="input-top"
            type="text"
            id="city"
            name="city"
            placeholder="City location"
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-wrap justify-between gap-1">
        <div className="item">
          <label className="label" htmlFor="type">
            Type
          </label>
          <select className="select" name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label className="label" htmlFor="property">
            Property
          </label>
          <select className="select" name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label className="label" htmlFor="minPrice">
            Min Price
          </label>
          <input
            className="input"
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label className="label" htmlFor="maxPrice">
            Max Price
          </label>
          <input
            className="input"
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label className="label" htmlFor="bedroom">
            Bedroom
          </label>
          <input
            className="input"
            type="text"
            id="city"
            name="city"
            placeholder="any"
          />
        </div>
        <button className="flex w-24 cursor-pointer items-center justify-center rounded bg-primary p-2">
          <img className="h-6 w-6" src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
