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

    });


    const {name,address,phoneNo,driverLicense,pickUp,dropOff,rentPrice,insurance,totalPrice} = formData;
    const handleInputChange=(e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]:value,
        }));
    };



    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const newUserInfo = {
            name:formData.name,
            address:formData.address,
            phoneNo: formData.phoneNo,
            driverLicense: formData.driverLicense,
            pickUp:formData.pickUp,
            dropOff:formData.dropOff,
            rentPrice:formData.rentPrice,
            insurance:formData.insurance,
            totalPrice:formData.totalPrice,
        };
        console.log(newUserInfo)
        const response = await fetch(`http://localhost:8080/roadrunner/userinfo/post` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserInfo),
        })
        if(response.ok){
            console.log("Data save hogya!")
        }
    }

  return (
    <div className='userInfoPage'> 
    <h3>UserInfo</h3>
    
    <div>
        <h1>Confirmation</h1>
          
        <form onSubmit={handleSubmitForm}>
        <label>Name</label>
        <br/>
        <input type='text' name='name' value={name} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Phone Number: </label>
        <br/>
        <input type='text' name='phoneNo' value={phoneNo} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Address</label>
        <br/>
        <input type='text' name='address' value={address} onChange={handleInputChange} />
        <br/>
        <br/>

        <label>Driver's License: </label>
        <br/>
        <input type='text' name='driverLicense' value={driverLicense} onChange={handleInputChange} />
        <br/>
        <br/>

        <label>PickUp Date</label>
        <br/>
        <input type='date' name='pickUp' value={pickUp} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>DropOff Date</label>
        <br/>
        <input type='date' name='dropOff' value={dropOff} onChange={handleInputChange}/>
        <br/>
        <br/>

        <br/>
        {/* <input type='readonly'/> */}
        <br/>
        <br/>


        {/* <label> Total Price:</label>
        <br/>
        <input value={numOfNightsPrice()} readOnly/>
        <br/>
        <br/>

        <label>Sub Total with Tax:{subTotal}</label>
        <br/>
        <input value={TaxPrice()} readOnly/>
        <br/>
        <br/> */}
        <input type='submit'/>
        </form>
        
        
    </div>
    
    </div>
  )
}
