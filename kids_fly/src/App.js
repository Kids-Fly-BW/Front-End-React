import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import BookingDashboard from './components/Booking/BookingDashboard'


function App() {
  return (
    <div className="App">
        <h1>Kids Fly</h1>
        <BookingDashboard/>
    </div>
  );
}

export default App;
