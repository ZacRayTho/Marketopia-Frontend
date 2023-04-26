import React, { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import AuthService from "../services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "../services/auth.constants";
import ListingCard from "../components/ListingCard";
import EditModal from "../components/EditModal";
import request from "../services/api.request";
import toast from "react-hot-toast";
import Modal from "../components/Modal";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "../firebaseConfig";

function profile() {
  const router = useRouter();
  const [state, dispatch] = useGlobalState();
  const [listings, setListings] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [ownListing, setOwnListings] = useState(false);
  const [savedListing, setSavedListing] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get(API_URL + "listings/").then((resp) => {
      // console.log(resp.data);
      setListings(resp.data);
    });
    // console.log(state.currentUser?.user_id, "test");
    axios.get(API_URL + `users/${state.currentUser?.user_id}/`).then((resp) => {
      // console.log(resp);
      setUserInfo({
        firstName: resp.data.first_name,
        lastName: resp.data.last_name,
        email: resp.data.email,
        image: resp.data.image,
      });
      setUser(resp.data);
    });
  }, []);

  // console.log(user?.saved);

  function logout() {
    AuthService.logout();
    router.push("/");
    dispatch({
      currentUserToken: null,
      currentUser: null,
    });
  }

  function destroy(id) {
    axios.delete(API_URL + `listings/${id}/`);
    window.location.reload(true);
  }

  function edit(listing) {
    setModalData(listing);
    setShowModal(true);
  }

  function showOwnListings() {
    setOwnListings(!ownListing);
  }

  function removeSaved(id) {
    axios
      .get(API_URL + `users/${state.currentUser?.user_id}`)
      .then(async (resp) => {
        let options = {
          url: `users/p/${state.currentUser?.user_id}/`,
          method: "PATCH",
          data: {
            saved: user.saved.filter((item) => item != id),
          },
        };
        await request(options);
        toast("Listing Removed!");
        window.location.reload(true);
      });
  }

  const handleChange = (key, value) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
    
  };
  
  async function patchUser() {
    const storageRef = ref(storage, `/files/${userInfo.image.name}`);
    uploadBytes(storageRef, userInfo.image).then((snapshot) => {
      getDownloadURL(storageRef).then(async (url) => {
        let options = {
          url: `/users/p/${state.currentUser.user_id}/`, // just the endpoint
          method: "PATCH", // sets the method
          data: {
            // gets sent in the body of the request
            email: userInfo.email,
            first_name: userInfo.firstName,
            last_name: userInfo.lastName,
            image: url,
          },
        };
        await request(options); // await the response and pass in this fancy object of request options
        toast("Profile Updated!")
      });
    });
    // setSomeState(resp.data) // set the response
  }

  return (
    <div className="w-full h-full space-y-5">
      <EditModal
        isVisible={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
      />
      <Modal
        isVisible={showModal2}
        setShowModal={setShowModal2}
        modalData={modalData}
      />
      <div className="mx-auto w-52 mt-5 flex-col flex text-center">
        {/* {state.currentUser?.user_id} */}
        <button className="btn flex mx-auto" onClick={logout}>
          Log out
        </button>
      </div>
      <button
        className="btn flex mx-auto"
        onClick={() => setEditProfile(!editProfile)}
      >
        Edit Profile
      </button>
      <div
        className={
          editProfile
            ? "bg-mtgray w-2/6 h-fit mx-auto space-y-3 pt-3"
            : "hidden"
        }
      >
        <div className="flex justify-between">
          <div>Email:</div>
          <input
            value={userInfo.email}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
          ></input>
        </div>
        <div className="flex justify-between">
          <div>First Name:</div>
          <input
            value={userInfo.firstName}
            onChange={(e) => {
              handleChange("firstName", e.target.value);
            }}
          ></input>
        </div>
        <div className="flex justify-between">
          <div>Last Name:</div>
          <input
            value={userInfo.lastName}
            onChange={(e) => {
              handleChange("lastName", e.target.value);
            }}
          ></input>
        </div>
        <div className="flex justify-between">
          <div>Profile Picture:</div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleChange("image", e.target.files[0]);
            }}
          ></input>
        </div>
        <div>
          <button className="btn flex mx-auto" onClick={patchUser}>Confirm</button>
        </div>
      </div>
      <button className="btn flex mx-auto" onClick={showOwnListings}>
        Your Listings
      </button>
      <div
        className={
          ownListing ? "text-center text-lg" : "text-center text-lg hidden"
        }
      >
        <div>Your Listings</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings
            .filter(
              (listing) => listing.seller.id == state.currentUser?.user_id
            )
            .map((listing) => (
              <div key={listing.id}>
                <ListingCard key={listing.id} listing={listing} page="edit" />
                <button className="btn" onClick={() => edit(listing)}>
                  Edit
                </button>
                <button className="btn" onClick={() => destroy(listing.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
      <button
        className="btn flex mx-auto"
        onClick={() => setSavedListing(!savedListing)}
      >
        Saved Listings
      </button>
      <div
        className={
          savedListing ? "text-center text-lg" : "text-center text-lg hidden"
        }
      >
        <div>Saved Listings</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings
            .filter((listing) => user.saved.includes(listing.id))
            .map((listing) => (
              <div key={listing.id}>
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  setShowModal={setShowModal2}
                  setModalData={setModalData}
                  page="browse"
                />
                <button className="btn" onClick={() => removeSaved(listing.id)}>
                  Remove
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default profile;
