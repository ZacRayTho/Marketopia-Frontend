import React from "react";
import ListingCard from "./ListingCard";

function Browse({ listings, setShowModal, setModalData, filter }) {
  function filtered() {
    switch (filter.type) {
      case "":
        return listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            setShowModal={setShowModal}
            setModalData={setModalData}
          />
        ));
      case "category":
        return listings
          .filter((listing) => listing.category[0].id == filter.filterBy)
          .map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              setShowModal={setShowModal}
              setModalData={setModalData}
            />
          ));
      case "search":
        return listings
          .filter(
            (listing) =>
              listing.title
                .toLowerCase()
                .includes(filter.filterBy.toLowerCase()) ||
              listing.description
                .toLowerCase()
                .includes(filter.filterBy.toLowerCase())
          )
          .map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              setShowModal={setShowModal}
              setModalData={setModalData}
            />
          ));
    }
  }

  return (
    <div className="">
      <div className="text-center text-xl font-bold my-2">Today's picks</div>
      <div className="h-[calc(100vh-6.4rem)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered()}
      </div>
    </div>
  );
}

export default Browse;
