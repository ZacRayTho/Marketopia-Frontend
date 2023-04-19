import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../context/GlobalState';
import axios from 'axios';
import { API_URL } from '../services/auth.constants';

function Filters() {

  const [state, dispatch] = useGlobalState();
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(API_URL + "categories/")
    .then((resp) => {
      setCategories(resp.data)
    })
  },[])

  function handleChange(key, value) {
    setFilter({
      type: key,
      filterBy: value 
    })
  }


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
        <div>
          <label htmlFor='category'>Category:</label>
          <select
            className='border'
            onChange={(e) => {
              console.log(e.target.value)
              handleChange('category', e.target.value)
            }}
            id='category'
          >
            <option>Category</option>
            {
              categories?.map((category => {
                return <option value={category.id} key={category.id}>{category.name}</option>
              }))
            }
          </select>
        </div>
      </div>
      <div>bottom</div>

    </div>
  )
}

export default Filters