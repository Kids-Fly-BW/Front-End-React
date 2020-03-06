//bring in modal from react.js
//pass down state props from booking dashboard to this card.

import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {putData} from '../../actions'

function BookingEdit(props){

const [bookingEdit, setBookingEdit]= useState({
    airline: props.bookinginfo.airline,
    flight_number: props.bookinginfo.flight_number,
    airport_name: props.bookinginfo.airport_name
})

console.log('bookingEdit', bookingEdit)
console.log('bookingProps', props)
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    const user_id = localStorage.getItem('ID')



const startEdit =() => {
    console.log('here')
    props.putData(user_id, bookingEdit)
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
            <Button color="danger" onClick={toggle}>Change</Button>
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
          <Button key={props.id} color="primary" onClick={() => startEdit()}>Edit</Button>{' '}
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
mapStateToProps, {putData}
)(BookingEdit)