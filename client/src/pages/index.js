import { useEffect, useState } from "react";
import Browse from "../components/Browse";
// import Filters from "../components/Filters";

import { GlobalProvider } from "../context/GlobalState";
import axios from "axios";
import Modal from "../components/Modal";
import dynamic from "next/dynamic";
import { API_URL } from "../services/auth.constants";

const Filters = dynamic(() => import("../components/Filters"), { ssr: false });

function Home() {
  const [listings, setListings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({
    type: "",
    filterBy: "",
  });
  const [sort, setSort] = useState(null)

  useEffect(() => {
    axios.get(API_URL + "listings/").then((response) => {
      setListings(response.data);
    });
  }, []);


  return (
    <div className="w-full">
      <Modal
        setShowModal={setShowModal}
        modalData={modalData}
        isVisible={showModal}
      />
      <div className="flex">
        <div className={ showFilter ? "w-full xl:flex xl:w-[19%]" : "hidden w-full xl:flex xl:w-[19%] "}>
          <Filters
            setFilter={setFilter}
            filter={filter}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            setSort={setSort}
          />
        </div>
        <div className="flex-1 bg-mtgray overflow-scroll w-full">
          <Browse
            listings={listings}
            setShowModal={setShowModal}
            setModalData={setModalData}
            filter={filter}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            sort={sort}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
