import React from 'react'
import { connect } from 'react-redux'
import {deleteData} from '../../actions'
import BookingEdit from './BookingEdit'


function BookingCard(props){


    // const handleDelete= (e)=>{
    //     e.preventDefault()
    //     props.deleteData()
    // }
    console.log('cardprops', props)
    return(
        <div className='cards'>
            <p>Airline:{props.airline} </p>
            <p>Airport: {props.airport_name}</p>
            <p>Flight# {props.flight_number}</p>
            <button onClick={()=>props.deleteData(props.id)}>Delete</button>
            <BookingEdit bookinginfo={props}/>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        isFetching:false,
        isUpdating:false,
        error: state.error
    }

}

export default connect(
    mapStateToProps, {deleteData}
) (BookingCard)