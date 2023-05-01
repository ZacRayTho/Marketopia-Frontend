import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../services/auth.constants";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import storage from "../firebaseConfig";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import toast from "react-hot-toast";

function NewListing() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "categories/")
      .then((resp) => setCategories([...resp.data]));
  }, []);

  const [state, dispatch] = useGlobalState();

  const [listing, setListing] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    image: "",
  });

  function handleChange(key, value) {
    setListing({
      ...listing,
      [key]: value,
    });
  }

  async function handleRegister(e) {
    e.preventDefault();
    toast("Posting...");

    // console.log(listing.image)
    // console.log(listing.image.length)
    // for (let pic of listing.image) {
    //   console.log(pic.name, "NAME")
    //   console.log(pic, "FILE")
    // }

    let resp = await axios.post(API_URL + "locations/", {
      zip: listing.location,
    });

    let location = resp.data.id;
    console.log(location);
    let response = await axios.post(API_URL + "listings/", {
      title: listing.title,
      description: listing.description,
      price: listing.price,
      location: location,
      category: [parseInt(listing.category)],
      seller: state.currentUser?.user_id,
    });

    let listing_id = response.data.id;
    for (let pic of listing.image) {
      const storageRef = ref(storage, `/files/${pic.name}`);
      await uploadBytes(storageRef, pic).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          axios
            .post(API_URL + "images/", {
              pic: url,
              owner: listing_id,
            })
            .then((resp) => {
              console.log(resp);
            });
        });
      });
    }
    toast("Item Posted");
    router.push("/");
  }

  return (
    <div className="w-full">
      <form
        className="mx-auto border-2 bg-mtgray md:w-3/4  lg:w-1/2 mt-2 max-w-2xl"
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
        </div>
        <div className="flex justify-between m-2 items-center space-x-2">
          <label htmlFor="image">Image:</label>
          <input
            className="border"
            type="file"
            accept="image/*"
            id="image"
            multiple
            required
            onChange={(e) => handleChange("image", e.target.files)}
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

export default NewListing;
