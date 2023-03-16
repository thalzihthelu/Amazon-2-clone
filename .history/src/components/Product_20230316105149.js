import React from 'react'
import Image from "next/image"
import {useState} from "react"
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import {addToBasket} from '../slices/basketSlice'
import { Provider } from 'react-redux';
import Currency from "react-currency-formatter"
const MAX_RATING=5;
const MIN_RATING=1;
function Product({id,title,price,description,category,image}) {
 
  const dispatch = useDispatch();
  
    const [rating] =useState(
        Math.floor(Math.random()*(MAX_RATING - MIN_RATING +1)) + MIN_RATING
    );
    
const [hasPrime] = useState(Math.random()<0.5)
const addItemToBasket = () => {
    //add item to basket
    const product = {
     id ,title,price,description,category,image
    };
    dispatch(addToBasket(product));
};

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image src= {image} height={200} width={200} object-fit="contain" />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
     {Array(rating).fill().map((_,i)=>{
         <StarIcon className='h-5 text-yellow-500'/>
     })}
    
      <StarIcon className='h-5'/>
      </div>
      
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <Currency quantity ={price} currency = "GBP" />
      </div>
      <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
