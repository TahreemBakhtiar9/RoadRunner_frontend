

import React from 'react'
import { Link } from 'react-router-dom'

export const Car = (props) => {
    const { id, name, shortDesc, longDesc, imgLink,perDayRental} =props.data

  return (
    <div className='car'>
        <div className='carimg'>
            <img src={imgLink}/>
            
        
        <div className='desc'>
            <Link to={`/car/${id}`}>
        <p><b>{name}</b></p>
        </Link>
        <p>{shortDesc}</p>
        <p>Rs: {perDayRental}/-</p>
        </div>
        </div>
    </div>
  )
}
