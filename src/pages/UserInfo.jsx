import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserInfo = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    let car = state.car;
    console.log({ perDayRental: car.perDayRental })

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNo: "",
        driverLicense: "",
        pickUp: "",
        dropOff: "",
        rentPrice: "",
        insurance: "",
        totalPrice: "",
        // pickUpTime:"",
        // dropOffTime:"",

    });


    const { name, address, phoneNo, driverLicense, pickUp, dropOff, rentPrice, insurance, totalPrice } = formData;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value,
        }));
    };

    const [checkbox, setCheckbox] = useState(false);
    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked);
    };

    const totalCarPrice = () => {

        if (checkbox === false) {
            const carPriceGet = car.perDayRental;
            const start = new Date(formData.pickUp);
            const end = new Date(formData.dropOff);
            const numOfDays = (end - start) / (1000 * 60 * 60 * 24);
            const PriceWithOutWaiver = carPriceGet * numOfDays;
            console.log(numOfDays)
            console.log(PriceWithOutWaiver)
            return (PriceWithOutWaiver);

        }
        else {
            const carPriceGet = car.perDayRental;
            const start = new Date(formData.pickUp);
            const end = new Date(formData.dropOff);
            const numOfDays = (end - start) / (1000 * 60 * 60 * 24);
            const PriceWithOutWaiver = carPriceGet * numOfDays;
            const PriceWithWaiver = (numOfDays * 15000) + PriceWithOutWaiver
            console.log(numOfDays)
            console.log(PriceWithWaiver)
            return (PriceWithWaiver)
        }

    }

    //  useEffect(()=>{ totalCarPrice()

    //  }, handleCheckbox)


    const totalInsurance = () => {
        const perDayInsurance = 15000;
        const start = new Date(formData.pickUp);
        const end = new Date(formData.dropOff);
        const numOfDays = (end - start) / (1000 * 60 * 60 * 24);
        const TotalInsurance = (perDayInsurance * numOfDays);
        console.log(TotalInsurance);
        return (TotalInsurance);
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const newUserInfo = {
            name: formData.name,
            address: formData.address,
            phoneNo: formData.phoneNo,
            driverLicense: formData.driverLicense,
            pickUp: formData.pickUp,
            dropOff: formData.dropOff,
            rentPrice: car.perDayRental,
            insurance: totalInsurance(),
            totalPrice: totalCarPrice(),
            // pickUpTime:formData.pickUpTime,
            // dropOffTime:formData.dropOffTime,
        };
        console.log(newUserInfo)
        const response = await fetch(`http://localhost:8080/roadrunner/userinfo/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserInfo),
        })
        if (response.ok) {
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
                    <br />
                    <input type='text' name='name' value={name} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label>Phone Number: </label>
                    <br />
                    <input type='text' name='phoneNo' value={phoneNo} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label>Address</label>
                    <br />
                    <input type='text' name='address' value={address} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label>Driver's License: </label>
                    <br />
                    <input type='text' name='driverLicense' value={driverLicense} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label>PickUp Date</label>
                    <br />
                    <input type='date' name='pickUp' value={pickUp} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label>DropOff Date</label>
                    <br />
                    <input type='date' name='dropOff' value={dropOff} onChange={handleInputChange} />
                    <br />
                    <br />

                    <label>Damage Waiver </label>
                    <br />
                    <input type='checkbox' name='checkbox' value={totalCarPrice()} onClick={handleCheckbox} />
                    <br />
                    <br />

                    <br />
                    {/* <input type='readonly'/> */}
                    <br />
                    <br />


                    <label> Price per Day:</label>
                    <br />
                    <input value={car.perDayRental} readOnly />
                    <br />
                    <br />


                    <label> Total Insurance:</label>
                    <br />
                    <input name='insurance' value={totalInsurance()} onClick={handleCheckbox} readOnly />
                    <br />
                    <br />

                    {/* <label> Waiver per Day:</label>
        <br/>
        <input value={totalCarPrice()} onClick={handleCheckbox} readOnly/>
        <br/>
        <br/> */}

                    <label> Total Price with:</label>
                    <br />
                    <input value={totalCarPrice()} onClick={handleCheckbox} readOnly />
                    <br />
                    <br />

                   
                    <button onClick={() => navigate('/')}>Change My Car </button>
                   <button onClick={() => navigate('/checkout')}>CheckOut</button>

                </form>

            </div>

        </div>
    )
}
