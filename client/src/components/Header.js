import React from 'react'

function Header() {
  return (
    <div className='w-full flex justify-between py-2 items-center px-4 border-b-2 drop-shadow'>
      <div className='font-righteous lg:text-4xl text-mtpurple'>
        MARKETOPIA
      </div>
      <div className='space-x-2'>
        <button className='py-2 px-4 bg-mtpurple rounded-full text-white font-bold'>
          Log In
        </button>
        <button className='py-2 px-4 bg-mtpurple rounded-full text-white font-bold'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Header