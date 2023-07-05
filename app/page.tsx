import React from 'react'
import Image from 'next/image'
import {  Hero,CarCatalouge } from '@/components'

function page() {
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <CarCatalouge/>
    </main>


  )
}

export default page