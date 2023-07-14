
import React, { useEffect, useState } from 'react';
import {Car} from './Car'
import './Home.css'

export const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/roadrunner/cars/get`)
        .then((response) => response.json())
        
        .then((data) => setCars(data))
        console.log(cars)
        // .catch((error) => console.error('Error: ', error));
      } , []);


  return (
    <div className='home'>
        <h1> RoadRunner Rental Car</h1>
        
        <div className='cars'>
        {
            cars.map((car) => (
             <Car key={car.id} data={car}/>   
            ))
        }
        </div>
        </div>
  )
}
