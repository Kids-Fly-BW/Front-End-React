import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BookingDashboard from "./components/Booking/BookingDashboard";

import PrivateRoute from './utils/PrivateRoute'

import Navigation from "./components/Users/Navigation";
import UserRegister from "./components/Users/UserRegister";
import UserLogin from "./components/Users/UserLogin";

function App() {



  return (
    <div className="App">
      <Route path='/'>
        <h1>Kids Fly</h1>
        <Navigation />
      </Route>

      <Route path='/booking'>
        <BookingDashboard />
      </Route>

      <Route path="/SignUp">
        <UserRegister />
      </Route>
      <Route path="/Login">
        <UserLogin />
      </Route>
    </div>
  );
}

export default App;
