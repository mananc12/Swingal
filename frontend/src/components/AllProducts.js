import React from 'react'
import { Product } from './Product'
export const AllProducts = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='w-9/12 mt-5'>
    <div className='text-3xl font-bold'>Search for Amazing Products</div>
    <div className='rounded-xl p-1 w-96 h-10 border-2 border-gray-400'><input type='search' placeholder='Search' className='outline-none w-full'/></div>
    <div><Product/></div>
    </div>
    </div>
  )
}
