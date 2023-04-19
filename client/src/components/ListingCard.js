import React from 'react'
import Image from "next/image";

function ListingCard({ listing, setShowModal, setModalData }) {



    return (
        <div 
        className='w-36 md:w-44 2xl:w-72 mb-4 mx-auto bg-transparent rounded-lg min-h-full' 
        onClick={() => {
            setModalData(listing)
            setShowModal(true)
        }}
        >
            <div className='items-center flex min-h-[80%]'>
                <Image
                    src={listing?.Image[0] || 'https://zacraytho.github.io/img/zt-logo.png'}
                    alt=''
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