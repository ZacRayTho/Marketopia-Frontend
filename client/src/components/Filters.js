import Link from 'next/link'
import React from 'react'
import { useGlobalState } from '../context/GlobalState';

function Filters() {

  const [state, dispatch] = useGlobalState();

  return (
    <div className='flex-1 border-r-2 flex flex-col justify-between '>
      <div className='items-center flex flex-col'>
        {
          !state.currentUser ? (
            null
          ) : (
            <Link href={"/newListing"} className='btn mt-2'>
              New Listing
            </Link>
          )
        }
        <input
          className='rounded-full w-5/6 mx-3 my-4 py-2 px-4 outline-none bg-mtgray placeholder:text-gray-600'
          placeholder='Search Marketopia'>
        </input>
      </div>
      <div>bottom</div>

    </div>
  )
}

export default Filters