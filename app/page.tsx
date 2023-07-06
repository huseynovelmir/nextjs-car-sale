
import React from 'react'
import Image from 'next/image'
import { Hero, CarCatalouge, CarCard } from '@/components'
import { fetchCars } from '@/utils'


async function page() {

  const allCars = await fetchCars()
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <CarCatalouge />
      <div className='mt-12 padding-x padding-y max-width'>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>

        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>upps no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default page