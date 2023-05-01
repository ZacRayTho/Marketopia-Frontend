import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import axios from "axios";
import { API_URL } from "../services/auth.constants";
import Image from "next/image";

function Filters({ setFilter, filter, setShowFilter, setSort }) {
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
  
  function locationFilter() {
    axios
      .post(API_URL + `locations2/`, {
        zip: zipcode.current.value,
        range: sliderValue,
      })
      .then((resp) => {
        setFilter({
          type: "Location",
          filterBy: resp.data,
        });
      });
  }
  return (
    <div className="flex-1 lg:border-r-2 flex flex-col justify-between md:w-1/2 mx-auto">
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
        <hr className="border border-t-1 border-gray-200 my-4 w-4/5" />
        <div>
          <label htmlFor="sort">Sort By:</label>
          <select
          className="rounded-lg"
            name="sort"
            id="sort"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value={""} ></option>
            <option value="pricea">Price (Asc)</option>
            <option value="priced">Price (Dsc)</option>
            <option value="range">Range </option>
          </select>
        </div>
        <hr className="border border-t-1 border-gray-200 my-4 w-4/5" />
        <div>
          <label className="flex justify-center" htmlFor="category">Price:</label>
          <div className="flex justify-around">
            <input type="number" className="border w-1/4 rounded-lg px-1" placeholder="Min" onChange={(e) => {handleChange("min", e.target.value)}}/>
            <input type="number" className="border w-1/4 rounded-lg px-1" placeholder="Max" onChange={(e) => {handleChange("max", e.target.value)}}/>
          </div>
        </div>
        <hr className="border border-t-1 border-gray-200 my-4 w-4/5" />
        <div>
          <label htmlFor="category">Category:</label>
          <select
            className="border rounded-lg"
            onChange={(e) => {
              // console.log(e.target.value);
              handleChange("category", e.target.value);
            }}
            id="category"
          >
            <option></option>
            {categories?.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <hr className="border border-t-1 border-gray-200 mt-4 w-4/5" />

        <div className="my-4  space-y-2">
          <div className="xl:flex justify-center">
            <label htmlFor="location">Location:</label>
            <input
              type="number"
              placeholder="Zip Code"
              className="border rounded-lg px-1"
              ref={zipcode}
            />
          </div>
          <div className="items-center flex justify-center">
            <label htmlFor="range">Range:</label>
            <input
              type="range"
              id="range"
              name="range"
              min="10"
              max="150"
              className="accent-mtpurple"
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
              className="border mx-auto flex rounded-lg accent-mtpurple"
              onChange={(e) => {
                setSliderValue(e.target.value);
              }}
            />
          </div>
          <button className="btn flex mx-auto" onClick={locationFilter}>
            Search Range
          </button>
        </div>
        <hr className="border border-t-1 border-gray-200  w-4/5" />
      </div>
      <div>
        <button
          disabled={filter.type === ""}
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
