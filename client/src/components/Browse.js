import React from "react";
import ListingCard from "./ListingCard";

function Browse({
  listings,
  setShowModal,
  setModalData,
  filter,
  showFilter,
  setShowFilter,
  sort,
}) {
  function filtered() {
    // Define filter functions for each active filter
    const filterFunctions = [];
    if (filter.type === "category") {
      filterFunctions.push(
        (listing) => listing.category[0].id == filter.filterBy
      );
    }
    if (filter.type === "search") {
      filterFunctions.push(
        (listing) =>
          listing.title.toLowerCase().includes(filter.filterBy.toLowerCase()) ||
          listing.description
            .toLowerCase()
            .includes(filter.filterBy.toLowerCase())
      );
    }
    if (filter.type === "min") {
      filterFunctions.push((listing) => listing.price >= filter.filterBy)
    }
    if (filter.type === "max") {
      filterFunctions.push((listing) => listing.price <= filter.filterBy)
    }
    if (filter.type === "Location") {
      const cityArray = filter.filterBy.map(
        (city) => `${city.city}, ${city.state}`
      );
      filterFunctions.push((listing) => cityArray.includes(listing.location));
    }

    // Apply all filter functions to the listings
    const filteredListings = filterFunctions.reduce(
      (listings, filterFunction) => {
        return listings.filter(filterFunction);
      },
      listings
    );

    let sortedListings = [...filteredListings];
    switch (sort) {
      case "pricea":
        sortedListings = sortedListings.sort((a, b) => a.price - b.price);
        break;
      case "priced":
        sortedListings = sortedListings.sort((a, b) => b.price - a.price);
        break;
    }

    // Map the filtered listings to ListingCard components
    return sortedListings.map((listing) => (
      <ListingCard
        key={listing.id}
        listing={listing}
        setShowModal={setShowModal}
        setModalData={setModalData}
        page="browse"
      />
    ));
  }

  return (
    <div className="">
      <div className="text-center text-xl font-bold my-2">Today's picks</div>
      <div
        className="btn absolute bottom-5 right-5 lg:hidden"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        Options{" "}
      </div>
      <div className="h-[calc(100vh-6.4rem)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered()}
      </div>
    </div>
  );
}

export default Browse;
