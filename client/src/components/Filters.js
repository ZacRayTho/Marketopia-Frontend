import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import axios from "axios";
import { API_URL } from "../services/auth.constants";
import Image from "next/image";

function Filters({ setFilter, filter, setShowFilter }) {
  const [state, dispatch] = useGlobalState();
  const [categories, setCategories] = useState([]);
  const [sliderValue, setSliderValue] = useState(50);
  const zipcode = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    axios.get(API_URL + "categories/").then((resp) => {
      setCategories(resp.data);
    });
  }, []);

  function handleChange(key, value) {
    setFilter({
      type: key,
      filterBy: value,
    });
    ref.current.value = null;
  }
  console.log(filter)
  function locationFilter() {
    axios.post(API_URL + `locations2/`, {
      zip: zipcode.current.value,
      range: sliderValue
    })
    .then((resp) => {
      setFilter({
        type: "Location",
        filterBy: resp.data
      })
    })
  }
  return (
    <div className="flex-1 border-r-2 flex flex-col justify-between ">
      <div className="items-center flex flex-col">
        {!state.currentUser ? null : (
          <Link href={"/newListing"} className="btn mt-2">
            New Listing
          </Link>
        )}
        <div className="flex items-center m-3 ">
          <input
            ref={ref}
            className="rounded-l-full w-5/6 h-full py-2 px-4 outline-none bg-mtgray placeholder:text-gray-600"
            placeholder="Search Marketopia"
          ></input>
          <button
            className="bg-mtpurple p-2 h-full rounded-r-full"
            onClick={() => handleChange("search", ref.current.value)}
          >
            <Image
              src="./img/search.svg"
              alt=""
              height={25}
              width={25}
              className="invert"
            />
          </button>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            className="border"
            onChange={(e) => {
              console.log(e.target.value);
              handleChange("category", e.target.value);
            }}
            id="category"
          >
            <option>Category</option>
            {categories?.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <hr className="border border-t-1 border-mtgray mt-4 w-4/5" />

        <div className="my-4  space-y-2">
          <div className="flex justify-center">
            <label htmlFor="location">Location:</label>
            <input type="number" placeholder="Zip Code" className="border" ref={zipcode}/>
          </div>
          <div className="items-center flex justify-center">
            <label for="range">Range:</label>
            <input
              type="range"
              id="range"
              name="range"
              min="10"
              max="150"
              value={sliderValue}
              onChange={(e) => {
                setSliderValue(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={sliderValue}
              className="border mx-auto flex"
              onChange={(e) => {
                setSliderValue(e.target.value);
              }}
            />
          </div>
          <button className="btn flex mx-auto" onClick={locationFilter}>Search Range</button>
        </div>
        <hr className="border border-t-1 border-mtgray  w-4/5" />
      </div>
      <div>
        <button
          disabled={filter.type == ""}
          className="btn flex mx-auto my-2 disabled:opacity-50"
          onClick={() => {
            setFilter({
              type: "",
              filterBy: "",
            });
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
