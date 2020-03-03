import React, {useState} from 'react'

 const BookingDashboard = () => {

    const [bookingInfo, setBookingInfo] = useState({
        airline: '',
        flightNumber: '',
        numberOfTickets: ''
    })

    const handleChange = (e) =>{
       setBookingInfo({
           ...bookingInfo,
           [e.target.name]: e.target.value
       })
    }



//    const handleSubmit = (e) =>{
//     e.preventDefault
//     }


    return (
        <div>
            {/* this is the data from the server with other currect Bookings */}
            <div>
            <p>Bookings to come</p>
            {/* Booking Form */}
            <form>


                <label htmlFor = 'airline'>Airline Name</label>
                <input
                name='airline'
                type='text'
                value={bookingInfo.airline}
                onChange={handleChange}
                />


                <label hmtlFor ='flightNumber'>Flight Number</label>
                <input
                name='flightNumber'
                type='text'
                value={bookingInfo.flightNumber}
                onChange={handleChange}
                />


                <label htmlFor ='numberOfTickets'>How many Tickets</label>
                <input
                name='numberOfTickets'
                type='text'
                value={bookingInfo.numberOfTickets}
                onChange={handleChange}
                />


            </form>
            </div>
        </div>
    )
}

export default BookingDashboard