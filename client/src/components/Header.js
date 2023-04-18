import React from 'react'
import Link from 'next/link'
import { useGlobalState } from '../context/GlobalState';

function Header() {

  const [state, dispatch] = useGlobalState();

  console.log(state, "HERE")


  return (
    <div className='w-full flex justify-between py-2 items-center px-4 border-b-2 drop-shadow'>
      <div className='font-righteous lg:text-4xl text-mtpurple'>
        MARKETOPIA
      </div>
      <div className='space-x-2'>
        {!state.currentUser ? (
          <div>
            <Link className='btn' href="/login">
              Log In
            </Link>
            <Link className='btn' href="/register">
              Sign Up
            </Link>
          </div>
        ) : (
          <div>
            <Link className='btn' href="/profile">
              Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header