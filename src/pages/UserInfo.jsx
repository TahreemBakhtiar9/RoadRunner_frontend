import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';

export const UserInfo = () => {
    const {state} = useLocation();
    let car = state.car;
    console.log({perDayRental: car.perDayRental})

    const[formData,setFormData] = useState({
        name:"",
        address:"",
        phoneNo:"",
        driverLicense:"",
        pickUp:"",
        dropOff:"",
        rentPrice:"",
        insurance:"",
        totalPrice:""

    })

  return (
    <div>UserInfo</div>
  )
}
