import React, {useState, useEffect} from 'react'
import axios from 'axios'


const UserProfile = () =>{
const [user, setUser]= useState()

useEffect(()=>{
    axios
    .get('http://localhost:5000/')
    .then(res =>{
        setUser(res.data)
    })
    .catch(err =>{
        console.log('this is not a drill', err)
    })
})



    return(
        <div>
            <h1>Welcom to UserProfile {user.name}</h1>
            <form>


                <label htmlFor='name'>Name</label>
                <input
                type='text'
                name='name'
                value={user.name}
                onChange={handleChange}
                />


                <label htmlFor='email'>Email</label>
                <input
                type='email'
                name='email'
                value={user.email}
                onChange={handleChange}
                />


                <label htmlFor='password'>Password</label>
                <input
                type='password'
                name='password'
                value={user.password}
                onChange={handleChange}
                />

                <button>Submit Any Changes</button>
            </form>
        </div>
    )
}

export default (UserProfile)