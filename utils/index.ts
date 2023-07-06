export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key':`${process.env.API_KEY}`,
        'X-RapidAPI-Host': `${process.env.API_HOST}`
    }
    const response = await fetch(`${process.env.API_URL}`, {
        headers: headers,
    });

    const result = await response.json()
    return result;


}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay:number = 50; // Base rental price per day in dollars
    const mileageFactor:number = 0.1; // Additional rate per mile driven
    const ageFactor:number = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};// This is ChatGPT function man ;)