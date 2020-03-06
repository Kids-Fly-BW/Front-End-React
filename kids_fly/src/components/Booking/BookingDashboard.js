import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getData, postData, putData, deleteData} from '../../actions'

 const BookingDashboard = (props) => {
console.log(props)
    const [bookingInfo, setBookingInfo] = useState({
        airline: '',
        flight_number: '',
        airport_name: ''
    })

    
    const [list, setList] = useState({})
    useEffect(()=>{
        setList(props.getData())
        console.log('booking', list.data)
    }, [])


    const handleChange = (e) =>{
        setBookingInfo({
            ...bookingInfo,
            [e.target.name]: e.target.value
        })
     }

   const handleSubmit = (e) =>{
    e.preventDefault()
    props.postData({...bookingInfo, user_id: localStorage.getItem('ID')})
    setBookingInfo({
        airline: '',
        flight_number: '',
        airport_name: ''
    })
    }

   

    
    return (
        <div>
            {props.booking.map(e =>(
                <div key={e.id}>
                    <p>{e.airport_name}</p>
                    <p>{e.airline}</p>
                </div>
            ))}
            
            <div>
            <p>Bookings to come</p>


            {/* Booking Form */}
            <form onSubmit={handleSubmit}>


                <label>Airline Name</label>
                <input
                name='airline'
                type='text'
                value={bookingInfo.airline}
                onChange={handleChange}
                placeholder='Airline'
                />


                <label>Flight Number</label>
                <input
                name='flight_number'
                type='text'
                value={bookingInfo.flight_number}
                onChange={handleChange}
                placeholder= 'flight#'
                />


                <label>Airport Name</label>
                <input
                name='airport_name'
                type='text'
                value={bookingInfo.airport_name}
                onChange={handleChange}
                placeholder = 'Airport Name'
                />

                <button className='booking-button' type='submit'>Check In</button>

            </form>
            </div>
        </div>
    )
}

    const mapStateToProps = state =>{
        return{
            booking: state.booking,
            isFetching:false,
            isUpdating:false,
            error: state.error
        }
    }



export default connect (
    mapStateToProps, {getData, postData, putData, deleteData}
) (BookingDashboard)
