import React from 'react'

function Filters() {
  return (
    <div className='flex-1 border-r-2 flex flex-col justify-between drop-shadow-2xl bg-slate-400'>
      <div className='items-center flex flex-col'>
        <input
          className='rounded-full w-5/6 mx-3 my-4 py-2 px-4 outline-none'
          placeholder='Search Marketopia'>
        </input>
      </div>
      <div>bottom</div>

    </div>
  )
}

export default Filters