import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import axios from "axios";
import { API_URL } from "../services/auth.constants";
import Image from "next/image";

function Filters({ setFilter, filter }) {
  const [state, dispatch] = useGlobalState();
  const [categories, setCategories] = useState([]);
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
          <button className="bg-mtpurple p-2 h-full rounded-r-full" onClick={() => handleChange("search", ref.current.value)}>
            <Image
              src="./img/search.svg"
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
