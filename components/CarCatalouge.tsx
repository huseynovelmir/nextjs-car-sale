import React from 'react'
import {SearchBar,CustomFilter} from './index'

function CarCatalouge() {
    return (
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
            <div className='home__text-container'>
                <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                <p>Explore the cars you might like</p>
            </div>

            <div className="home__filters">
                <SearchBar/>
                <div className="home__filter-container">
                    <CustomFilter title="fuel"  />
                    <CustomFilter title="year"  />
                </div>
            </div>
        </div>
    )
}

export default CarCatalouge