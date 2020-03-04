import React from 'react';
import {Route} from "react-router-dom"
import './App.css';
import BookingDashboard from './components/Booking/BookingDashboard'

import Navigation from "./components/Users/Navigation"
import UserRegister  from "./components/Users/UserRegister";
import UserLogin from "./components/Users/UserLogin";


function App() {
  return (
    <div className="App">
        <h1>Kids Fly</h1>
        <BookingDashboard/>

        <Navigation/>
      <Route exact path="/SignUp" component={UserRegister} />
      <Route path="/Login" component={UserLogin} />
    </div>
  );
}

export default App;
