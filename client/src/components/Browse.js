import React from 'react'
import ListingCard from './ListingCard'

function Browse({ listings }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            listings.map((listing) =>
              <ListingCard listing={listing} />
            )
          }
    </div>
  )
}

export default Browse