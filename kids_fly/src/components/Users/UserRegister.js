import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik';
// import './UserRegister.css';
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import {Link} from "react-router-dom";


const Div = styled.div`
display: flex;
flex-direction: column;
border: solid 5px #61dafb;
padding: 3rem 8rem;
  `;



const UserRegister = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);


  return (

       

    <Div className="user-form">
      <h1>Sign Up</h1>
      <Form>
        <Field 
        //USER INFO
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name" 
        />
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        

        <Field 
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Last Name" 
        />
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        
        <Field 
          id="username"
          type="text"
          name="username"
          placeholder="Username" 
        />
        {touched.username && errors.username&& <p>{errors.username}</p>}

        <Field 
          id="email"
          type="text"
          name="email"
          placeholder="Email" 
        />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field 
          id="password"
          type="password"
          name="password" 
          placeholder="Password:" 
          />
          {touched.password && errors.password && <p>{errors.password}</p>}

          <Field as="select" className="role-select" name="role">
          <option disabled value>Choose a Role</option>
          <option value="Bidder">Bidder</option>
          <option value="Seller">Seller</option>
        </Field>

        </Form>

        <Form>
          <Field
          //ADDRESS INFO 
                id=""
                name="streetAddress"
                variant="outlined"
                label="Street Address"
                type="text"
                placeholder="Street Address"
              />
            {touched.streetAddress && errors.streetAddress&& <p>{errors.streetAddress}</p>}

            <Field
                id=""
                name="city"
                variant="outlined"
                label="city"
                type="text"
                placeholder="City"
              />
            {touched.city && errors.city && <p>{errors.city}</p>}


            <Field as="select" className="state-select" name="state">
                <option disabled>Choose A State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </Field>
        
             <Field
                id=""
                name="zipCode"
                variant="outlined"
                label="zipCode"
                type="text"
                placeholder="Zip Code"
              />
            {touched.zipCode && errors.zipCode && <p>{errors.zipCode}</p>}

        <button type="submit">Submit</button>

      </Form>

      {users.map(users => (
        <ul>
          <li>First-Name: {users.firstName}</li>
          <li>Last-Name: {users.lastName}</li>
          <li>Username: {users.username}</li>
          <li>Email: {users.email}</li>
          <li>Password: {users.password}</li>
          <li>Role: {users.role}</li>
          <li>Street Address: {users.streetAddress}</li>
          <li>City: {users.city}</li>
          <li>State: {users.state}</li>
          <li>Zip-Code: {users.zipCode}</li>
        </ul>
      ))}
    </Div>
  );
};


const FormikForms = withFormik({
  mapPropsToValues({firstName, lastName, username,  email, password, role, streetAddress, city, state, zipCode}) {
    return {
    firstName: firstName || "",
    lastName:lastName || "",
    username:username || "",
    email: email || "",
    password: password || "",
    role: role || "",
    streetAddress: streetAddress || "",
    city: city || "",
    state: state ||"",
    zipCode: zipCode ||"",
    
    //   service: service || false
    };
  },

  validationSchema: Yup.object().shape({
      //User Info Alert
    firstName: Yup.string().min(1).required(" Name Required!"),
    lastName: Yup.string().min(1).required(" Name Required!"),
    email: Yup.string().email().required(" Email Required!"),
    password: Yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ).required("Password Required!"),
    role: Yup.string().required(" Fill In Role!"),


    //Address Alert
    streetAddress: Yup.string().required("Address Required!"),
    city: Yup.string().required("City Required!"),
    state: Yup.string().required("State Required!"),
    zipCode: Yup.string().min(5).max(5).required("Zip Code Required!"),
    // servie: Yup.bool()
  }),

  handleSubmit(values, {setStatus, resetForm}) {



  axios
    .post(" https://reqres.in/api/users", values)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(err => {
        console.log("Error:", err.response);
      });
  }
})(UserRegister);

export default FormikForms;  