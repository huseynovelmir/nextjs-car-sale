// 'use client'
// import { useState } from 'react'
// import { FetchData } from '@/types'
// import Image from 'next/image';
// import { CarProps } from '@/types';
// import { calculateCarRent } from '@/utils';




// function CarCard({ allCars }: FetchData) {

//     const carRent = calculateCarRent(allCars.city_mpg, allCars.year)

//     console.log(allCars);



//     const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
//     return (
//         <div className='mt-12 padding-x padding-y max-width'>
//             {!isDataEmpty ? (
//                 <section>
//                     <div className='home__cars-wrapper'>
//                         {allCars?.map((car: CarProps) => (
//                             <div className='car-card group'>
//                                 <div className='car-card__content'>
//                                     <h2 className='car-card__content-title'>{car.make}  {car.model}</h2>
//                                 </div>
//                                 <p>
//                                     <span>
//                                         {car.city_mpg}
//                                     </span>
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//             ) : (
//                 <div className='home__error-container'>
//                     <h2 className='text-black text-xl font-bold'>upps no result</h2>
//                     <p>{allCars?.message}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default CarCard
"use client"

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
interface CarCardProps {
    car: CarProps
}

function CarCard({ car }: CarCardProps) {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div>
            <div className='car-card group'>
                <div className='car-card__content'>
                    <h2 className='car-card__content-title'>{make}  {model}</h2>
                </div>
                <p>
                    <span>
                        {carRent}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default CarCard