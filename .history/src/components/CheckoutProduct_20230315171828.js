import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'


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
     < Image src={image} height={200} width={200} objectFit='contain'/>
     <div className='col-span-3 mx-5'>
        <p>{title}</p>
       <div>
        {Array(rating).fill().map((_,i)=>(
            <StarIcon key={i} className='h-5 text-yellow-500'/>

        ))}
       </div>

    </div>
    </div>
  )
}

export default CheckoutProduct
