import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './UserInfo.css';

export const UserInfo = () => {
    const naviagte=useNavigate();
    const {id}=useParams();
    const {state} = useLocation();
    const[user,setuser]=useState("");
    console.log(user.perDayRental);

    useEffect(() => {
        fetch(`http://localhost:8080/roadrunner/cars/get/${id}`)
        .then((response) => response.json())
        .then((data) =>{setuser(data)})
        .catch((error) => console.error('Error: ', error));

    }, []);


    const [formData, setFormData] = useState(() => {
        const localStored = JSON.parse(localStorage.getItem("confirmationData"));
        return localStored || {
            name:"",
            address:"",
            phoneNo:"",
            driverLicense:"",
            pickUp:"",
            dropOff:"",
            rentPrice:"",
            insurance:"",
            totalPrice:"",
        };
      });
    const {name,address,phoneNo,driverLicense,pickUp,dropOff,rentPrice,insurance,totalPrice} = formData;
    const handleInputChange=(e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]:value,
        }));
    };

    const [checkbox,setCheckbox] = useState(false);
     const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
  };

    const totalCarPrice= () => {
      
        if(checkbox === false){
            const carPriceGet = user.perDayRental;
            const start = new Date(formData.pickUp);
            const end = new Date(formData.dropOff);
            const numOfDays = (end - start)/ (1000*60*60*24);
            const PriceWithOutWaiver = carPriceGet * numOfDays;
            console.log(numOfDays)
            console.log(PriceWithOutWaiver)
            return(PriceWithOutWaiver);
    
        }
        else{
            const carPriceGet = user.perDayRental;
            const start = new Date(formData.pickUp);
            const end = new Date(formData.dropOff);
            const numOfDays = (end - start)/ (1000*60*60*24);
            const PriceWithOutWaiver = carPriceGet * numOfDays;
            const PriceWithWaiver = (numOfDays * 15000) + PriceWithOutWaiver
            console.log(numOfDays)
            console.log(PriceWithWaiver)
            return (PriceWithWaiver)
        }
        
    }


    const totalInsurance=() =>{
        const perDayInsurance = 15000;
        const start = new Date(formData.pickUp);
        const end = new Date(formData.dropOff);
        const numOfDays = (end - start)/ (1000*60*60*24);
        const TotalInsurance = (perDayInsurance * numOfDays);
        console.log(TotalInsurance);
        return(TotalInsurance);
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const newUserInfo = {
            name:formData.name,
            address:formData.address,
            phoneNo: formData.phoneNo,
            driverLicense: formData.driverLicense,
            pickUp:formData.pickUp,
            dropOff:formData.dropOff,
            rentPrice:user.perDayRental,
            insurance:totalInsurance(),
            totalPrice:totalCarPrice(),
            // pickUpTime:formData.pickUpTime,
            // dropOffTime:formData.dropOffTime,
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
            localStorage.removeItem("Confirmed!");
        }
        naviagte('/checkout')
    }



    useEffect(() => {
        localStorage.setItem("confirmationData", JSON.stringify(formData));
      }, [formData]);




  return (
    <div className='userInfoPage'> 
    
    
    <div>
        <h1>UserInfo</h1>
          
        <form onSubmit={handleSubmitForm}>
        <label>Name</label>
        <br/>
        <input type='text' name='name' data-testId="name" value={name} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Phone Number: </label>
        <br/>
        <input type='text' name='phoneNo' data-testId="phone" value={phoneNo} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Address</label>
        <br/>
        <input type='text' name='address' data-testId="address" value={address} onChange={handleInputChange} />
        <br/>
        <br/>

        <label>Driver's License: </label>
        <br/>
        <input type='text' name='driverLicense' data-testId="driving" value={driverLicense} onChange={handleInputChange} />
        <br/>
        <br/>

        <label>PickUp Date</label>
        <br/>
        <input type='datetime-local' name='pickUp' data-testId="pickUp" value={pickUp} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>DropOff Date</label>
        <br/>
        <input type='datetime-local' name='dropOff' data-testId="dropOff" value={dropOff} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Damage Waiver </label>
        <br/>
        <input type='checkbox' name='checkbox' data-testId="box" value={totalCarPrice()} onClick={handleCheckbox} />
        <br/>
        <br/>

        <br/>
        {/* <input type='readonly'/> */}
        <br/>
        <br/>


         <label> Price per Day:</label>
        <br/>
        <input data-testId="perday" value={user.perDayRental} readOnly/>
        <br/>
        <br/>


        <label> Total Insurance:</label>
        <br/>
        <input name='insurance' data-testId="total"value={totalInsurance()} onClick={handleCheckbox} readOnly/>
        <br/>
        <br/>

        {/* <label> Waiver per Day:</label>
        <br/>
        <input value={totalCarPrice()} onClick={handleCheckbox} readOnly/>
        <br/>
        <br/> */}

        <label> Total Price with:</label>
        <br/>
        <input value={totalCarPrice()} data-testId="totalprice" onClick={handleCheckbox} readOnly/>
        <br/>
        <br/>

        <button onClick={()=>naviagte('/')}>Change my Car</button>
        <br></br>
        <input type='submit' class='Checkout' data-testId="submit" value='Checkout'/>
        </form>
                
    </div>
    
    </div>
  )
}
