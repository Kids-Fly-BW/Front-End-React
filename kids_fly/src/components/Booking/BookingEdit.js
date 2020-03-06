//bring in modal from react.js
//pass down state props from booking dashboard to this card.

import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function BookingEdit(props){

    
const [edit, setEdit]= useState(false)
const [bookingEdit, setBookingEdit]= useState({
    airline: props.airline,
    flight_number: props.flight_number,
    airport_name: props.airport_name
})

console.log('bookingEdit', edit)

  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);





const startEdit =(jobs) => {
  setBookingEdit({
    id:props.booking.id, 
    airline: props.booking.airline,
    flight_number: props.booking.flight_number,
    airport_name: props.booking.airport_name
})
    setEdit(true)
}


const handleChange = (e) =>{
    setBookingEdit({
        ...bookingEdit,
        [e.target.name]: e.target.value
    })
 }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.putData()
    }
    return(
        <div>
            <Button color="danger" onClick={toggle}>Toggle Me</Button>
      <Modal isOpen={modal} toggle={toggle} className='Modals'>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <form onSubmit={handleSubmit}>

            <label>Airline Name</label>
                <input
                name='airline'
                type='text'
                value={bookingEdit.airline}
                onChange={handleChange}
                placeholder='Airline'
                />


                <label>Flight Number</label>
                <input
                name='flight_number'
                type='text'
                value={bookingEdit.flight_number}
                onChange={handleChange}
                placeholder= 'flight#'
                />


                <label>Airport Name</label>
                <input
                name='airport_name'
                type='text'
                value={bookingEdit.airport_name}
                onChange={handleChange}
                placeholder = 'Airport Name'
                />
            </form>
        </ModalBody>
        <ModalFooter>
        <Button  onClick={() => startEdit(edit)}>edit</Button>
          <Button key={edit.id} color="primary" onClick={toggle}>Edit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
            
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

export default connect(
mapStateToProps, {}
)(BookingEdit)