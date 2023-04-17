import React from 'react'
import ListingCard from './ListingCard'

function Browse({ listings }) {
  return (
    <div className=''>
      <div className='text-center text-xl font-bold my-2'>
      Today's picks
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          listings.map((listing) =>
            <ListingCard listing={listing} />
          )
        }
      </div>
    </div>
  )
}

export default Browse