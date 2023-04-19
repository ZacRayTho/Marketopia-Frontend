import React from 'react'
import ListingCard from './ListingCard'

function Browse({ listings, setShowModal, setModalData, filter }) {



  return (
    <div className=''>
      <div className='text-center text-xl font-bold my-2'>
      Today's picks
      </div>
      <div className='h-[calc(100vh-6.4rem)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          // create filter based on category, filter obejct in index
          listings.filter((listing) => listing.category).map((listing) =>
            <ListingCard key={listing.id}  listing={listing} setShowModal={setShowModal} setModalData={setModalData} />
          )
        }
      </div>
    </div>
  )
}

export default Browse