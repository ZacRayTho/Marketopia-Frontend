import React, { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import AuthService from "../services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "../services/auth.constants";
import ListingCard from "../components/ListingCard";
import EditModal from "../components/EditModal";

function profile() {
  const router = useRouter();
  const [state, dispatch] = useGlobalState();
  const [listings, setListings] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    axios.get(API_URL + "listings/").then((resp) => {
      // console.log(resp.data);
      setListings(resp.data);
    });
    axios.get(API_URL + `users/${state.currentUser?.user_id}/`).then((resp) => {
      // console.log(resp);
      setUser(resp.data.first_name + " " + resp.data.last_name);
    });
  }, []);

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

  return (
    <div className="w-full h-full space-y-5">
      <EditModal
        isVisible={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
      />
      <div className="mx-auto w-52 mt-5 flex-col flex text-center">
        {/* {state.currentUser?.user_id} */}
        <button className="btn" onClick={logout}>
          Log out
        </button>
      </div>
      <div className="text-center text-lg">
        <div>Your Listings</div>
        <div className="flex justify-center">
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
    </div>
  );
}

export default profile;
