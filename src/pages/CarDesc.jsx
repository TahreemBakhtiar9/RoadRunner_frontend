import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

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
        <h4><b> {car.name}</b></h4>
        <p><b> {car.perDayRental}</b></p>
        <p>{car.longDesc}</p>
    </div>

    <div className='rentMeBttn'>
        {car && <button onClick={() => navigate('/userinfo' , {state: {car}})}> Rent ME</button>}
    </div>
    </div>
  )
}
