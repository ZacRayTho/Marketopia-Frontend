import { useEffect, useState } from "react";
import Browse from "../components/Browse";
// import Filters from "../components/Filters";

import { GlobalProvider } from "../context/GlobalState";
import axios from "axios";
import Modal from "../components/Modal";
import dynamic from "next/dynamic";

const Filters = dynamic(() => import("../components/Filters"), { ssr: false });


function Home() {
    const [listings, setListings] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [filter, setFilter] = useState({
        type: "",
        filterBy: ""
    })

    const BASE_URL = "https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us94.gitpod.io/api/listings/"
  
    useEffect(() => {
        axios.get(BASE_URL)
        .then((response) => {
            setListings(response.data)
        })
    }, [])

    console.log(listings)


    return (
        
            <div className=" flex flex-col">
                <Modal setShowModal={setShowModal} modalData={modalData} isVisible={showModal}/>
                <div className="flex-1 flex  h-4 max-h-full">
                    <div className="flex w-[19%]">
                        <Filters setFilter={setFilter}/>
                    </div>
                    <div className="flex-1 bg-mtgray overflow-scroll">
                        <Browse listings={listings} setShowModal={setShowModal} setModalData={setModalData} filter={filter}/>
                    </div>
                </div>
            </div>
        
    );
}

export default Home;
