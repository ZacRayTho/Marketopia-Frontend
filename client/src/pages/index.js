import { useEffect, useState } from "react";
import Browse from "../components/Browse";
// import Filters from "../components/Filters";

import { GlobalProvider, useGlobalState } from "../context/GlobalState";
import axios from "axios";
import Modal from "../components/Modal";
import dynamic from "next/dynamic";
import { API_URL } from "../services/auth.constants";
import { useRouter } from "next/navigation";

const Filters = dynamic(() => import("../components/Filters"), { ssr: false });

function Home() {
  const router = useRouter();
  const [state, dispatch] = useGlobalState();
  const [bigPic, setBigPic] = useState("");
  const [listings, setListings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    filterBy: "",
  });
  const [sort, setSort] = useState(null);
  const [review, setReview] = useState(null);

  function average(array) {
    let sum = 0;
    for (let x of array) {
      sum += x;
    }
    return sum / array.length
  }

  useEffect(() => {
    axios.get(API_URL + "reviews/").then((resp) => {
      let arr = [];
      for (let rate of resp.data) {
        if (rate.seller.id === modalData?.seller.id) arr.push(rate.rating);
      }
      setReview(average(arr));
    });
  }, [modalData]);

  useEffect(() => {
    axios.get(API_URL + "listings/").then((response) => {
      setListings(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <Modal
        setShowModal={setShowModal}
        modalData={modalData}
        isVisible={showModal}
        router={router}
        state={state}
        bigPic={bigPic}
        setBigPic={setBigPic}
        review={review}
      />
      <div className="flex-1 flex  h-4 max-h-full ">
        <div
          className={
            showFilter
              ? "w-full lg:flex lg:w-[19%] overflow-y-auto"
              : "hidden w-full lg:flex lg:w-[19%] overflow-y-auto"
          }
        >
          <Filters
            setFilter={setFilter}
            filter={filter}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            setSort={setSort}
          />
        </div>
        <div className="flex-1 bg-mtgray overflow-scroll ">
          <Browse
            listings={listings}
            setShowModal={setShowModal}
            setModalData={setModalData}
            filter={filter}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            sort={sort}
            setBigPic={setBigPic}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
