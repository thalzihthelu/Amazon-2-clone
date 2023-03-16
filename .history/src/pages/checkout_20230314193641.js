import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

function checkout() {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <main className = "lg:flex max-w-screen-2xl mx-auto">
       <div classNae = 'flex-grow m-5 shadow-sm'>
        <Image src = 'https://links.papareact.com/ikj' width = {1020} height = {250} objectFit = 'contain' />
        </div>
        <div>
          <h1>Your Shopping Basket </h1>
        </div>

      </main>
    </div>
  )
}

export default checkout
