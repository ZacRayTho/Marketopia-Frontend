import { useEffect, useState } from "react";
import Browse from "../components/Browse";
import Filters from "../components/Filters";
import Header from "../components/Header";
import { GlobalProvider } from "../context/GlobalState";
import axios from "axios";

function Home() {
    const [listings, setListings] = useState([])
  
    const BASE_URL = "https://8000-zacraytho-marketopiabac-f72s9pmcyzg.ws-us94.gitpod.io/api/listings/"
  
    useEffect(() => {
        axios.get(BASE_URL)
        .then((response) => {
            setListings(response.data)
        })
    }, [])

    console.log(listings)
    return (
        <GlobalProvider>
            <div className="h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex">
                    <div className="flex w-[19%]">
                        <Filters />
                    </div>
                    <div className="flex-1 bg-red-200">
                        <Browse listings={listings} />
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default Home;
