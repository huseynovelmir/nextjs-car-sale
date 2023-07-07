
import React from 'react'
import Image from 'next/image'
import { Hero, CarCatalouge, CarCard, CustomFilter } from '@/components'
import { fetchCars } from '@/utils'


async function page({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.maufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',

  }
 
  )

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