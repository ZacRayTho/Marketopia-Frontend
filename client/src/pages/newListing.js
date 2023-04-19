import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../services/auth.constants";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import request from "../services/api.request";

function newListing() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  let endpoints = ["categories/", "locations/"];

  useEffect(() => {
    axios.all(endpoints.map((endpoint) => axios.get(API_URL + endpoint))).then(
      axios.spread((categories, locations) => {
        setCategories([...categories.data]);
        setLocations([...locations.data]);
      })
    );
  }, []);

  // console.log(categories, locations, "HERE SIR")

  const [state, dispatch] = useGlobalState();

  const [listing, setListing] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    image: "",
  });

  const [zip, setZip] = useState({
    city: "",
    state: "",
    zip: "",
  });

  function handleChange(key, value) {
    setListing({
      ...listing,
      [key]: value,
    });
  }

  async function locationData(x, y, z) {
    let options = {
      url: `create_location/`, // just the endpoint
      method: "POST", // sets the method
      data: {
        // gets sent in the body of the request
        city: x,
        state: y,
        zip: z,
        zipCodeTest: 40356
      },
    };
    let resp = await request(options); // await the response and pass in this fancy object of request options
    console.log(resp.data, "RESP DATA");
    // return resp.data // set the response
  }

  // console.log(zip, "THE ZIPPER IS HERE")
  function handleRegister(e) {
    e.preventDefault();
    console.log(listing.location);
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        listing.location
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`,
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods": "GET",
      //       "Access-Control-Allow-Credentials": true,
      //     },
      //   },
      { credentials: "include" }
    )
      .then((response) => {
        console.log("yep");
        console.log(response.json());
        return response.json();
      })
      .then((data) => {
        // Retrieve city and state from response
        const city = data.results[0].address_components.find((component) =>
          component.types.includes("locality")
        ).long_name;
        const state = data.results[0].address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        ).short_name;

        // console.log(city); // "Beverly Hills"
        // console.log(state); // "CA"
        // setZip({city: city, state: state, zip: listing.location})
        const lockOn = locationData(city, state, listing.location);
        console.log(lockOn, "LOCK ON");

        // console.log(listing)

        // axios.post(API_URL + "listings/", {
        //     title: listing.title,
        //     description: listing.description,
        //     price: listing.price,
        //     location: { city: city, state: state, zip: listing.location },
        //     category: listing.category,
        //     image: listing.image,
        //     seller: state.currentUser?.user_id
        // })
        //     .then((response) => {
        //         console.log(response)
        //     })
      })
      .catch((error) => console.error(error));

    // router.push('/')
  }

  return (
    <div className="w-full">
      <form
        className="mx-auto border-2 bg-mtgray w-1/2 mt-2"
        onSubmit={handleRegister}
      >
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="title">Title:</label>
          <input
            className="border"
            type="text"
            id="title"
            required
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="price">Price:</label>
          <input
            className="border"
            type="text"
            id="price"
            required
            onChange={(e) => handleChange("price", e.target.value)}
          />
        </div>
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="description">Description:</label>
          <input
            className="border"
            type="text"
            id="description"
            required
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="category">Category:</label>
          <select
            className="border"
            onChange={(e) => {
              console.log(e.target.value);
              handleChange("category", e.target.value);
            }}
            id="category"
            required
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
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="location">Zip Code:</label>
          <input
            className="border"
            type="text"
            id="location"
            required
            onChange={(e) => handleChange("location", e.target.value)}
          />
          {/* <select
                        className='border'
                        onChange={(e) => handleChange('location', e.target.value)}
                        id='location'
                        required
                    >
                        <option>Pick location</option>
                        {
                            locations?.map((location => {
                                return <option id={location.id}>{location.name}</option>
                            }))
                        }
                    </select> */}
        </div>
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="image">Image:</label>
          <input
            className="border"
            type="text"
            id="image"
            required
            onChange={(e) => handleChange("image", e.target.value)}
          />
        </div>
        <div className="flex">
          <input
            type="submit"
            value="Post Listing!"
            className="btn mx-auto my-2 disabled:opacity-60"
            disabled={
              listing.title &&
              listing.description &&
              listing.price &&
              listing.category &&
              listing.image &&
              listing.location
                ? false
                : true
            }
          />
        </div>
      </form>
    </div>
  );
}

export default newListing;
