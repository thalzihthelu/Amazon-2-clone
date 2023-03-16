import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'


function CheckoutProduct({
    id,
    title,
    price,
    description,
    category,
    rating,
    image

}) {
  return (
    <div className='grid grid-cols-5'>
     < Image src={image} height={200} width={200} object-Fit='contain'/>
     <div className='col-span-3 mx-5'>
        <p>{title}</p>
       <div className='flex'>
        {Array(rating).fill().map((_,i)=>(
            <StarIcon key={i} className='h-5 text-yellow-500'/>

        ))}
       </div>
 <p className='text-xs mt-2 mb-2 line-clamp-3'>
    {description}
 </p>
 <Currency quantity={price} currency='GBP'/>
    </div>
    <div className='flex flex-col space-y-2 my-auto justify-self-end'>

    <button className='button'>Add to Basket</button>
    
    <button className='button'>Remove from Basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct
