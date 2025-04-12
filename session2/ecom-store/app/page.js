import React from 'react';

export default function Home(){
  return(
    <div>
      <nav className='flex flex-row space-x-4'>
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width={"100px"}/>
        <div>
          <input
          className='w-[400px] border bg-[#808080] shadow border-rounded'
          placeholder='Search for product,Brands and More'
          type='text'
          />
          <button className='bg-blue-700 text-white rounded pt-2 pb-2 pl-3 pr-4'>Search</button>
        </div>
        <button className='m-2 p-2  bg-red-400 '>Home</button>
        <button className='m-2 p-2 bg-green-400 '>Support</button>
        <a href="/login" className='m-2 p-2  bg-yellow-400 '>Login</a>
      </nav>
    </div>
  )
}