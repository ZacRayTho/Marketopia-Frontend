import React from 'react'
import Image from "next/image";

function ListingCard({ listing }) {
    return (
        <div className='w-48 lg:w-72 mb-4 mx-auto bg-transparent rounded-lg '>
            <div className='min-h-[12rem]'>
                <Image
                    src={listing?.Image[0]}
                    width={100}
                    height={100}
                    className='w-full rounded-lg '
                />
            </div>
            <div className='font-bold text-lg'>
                ${listing.price}
            </div>
            <div className='text-xl'>
                {listing.title}
            </div>
            <div className='opacity-50'>
                {listing.location}
            </div>
        </div>
    )
}

export default ListingCard