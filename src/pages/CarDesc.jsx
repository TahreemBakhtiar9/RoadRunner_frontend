import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CarDesc.css';

export const CarDesc = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [car,setCar] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/roadrunner/cars/get/${id}`)
        .then((response) => response.json())
        .then((data) =>{setCar(data)})
        .catch((error) => console.error('Error: ', error));

    }, [id]);


  return (
    <div className='cardescpage'>
        <div className='carddescimg'>
    <img src={car.imgLink}/>
    </div>

    <div className='cardesc'>
        <h4 data-testId="carname"><b> {car.name}</b></h4>
        <p data-testId="carrental"><b> Rs: {car.perDayRental}</b></p>
        <p data-testId="cardesc">{car.longDesc}</p>
    </div>

    <div className='rentMeBttn'>
        {car && <button onClick={() => navigate('/userinfo' , {state: {car}})}> Rent ME</button>}
    </div>
    </div>
  )
}
