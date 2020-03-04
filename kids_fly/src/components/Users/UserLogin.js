import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik';
// import './UserLogin.css';
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";



const Div = styled.div`
display: flex;
flex-direction: column;
border: solid 5px #61dafb;
padding: 3rem 8rem;
margin: 5%;
  `



const UserLogin = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);


  return (
    <Div className="login-form">
      <h1>UserLogin</h1>
      <Form>
        <Field 
          id="username"
          type="text"
          name="username"
          placeholder="Username" 
        />
        {touched.username && errors.username&& <p>{errors.username}</p>}

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


        <button type="submit">Submit</button>
        
      </Form>

      {users.map(users => (
        <ul>
          <li>Username: {users.username}</li>
          <li>Password: {users.password}</li>
          <li>Role: {users.role}</li>
        </ul>
      ))}
    </Div>
  );
};


const FormikForms = withFormik({
  mapPropsToValues({username, password, role,}) {
    return {
    username:username || "",
    password: password || "",
    role: role || "",
    
    //   service: service || false
    };
  },

  validationSchema: Yup.object().shape({
      //User Info Alert
    username: Yup.string().min(1).required(" Username Required!"),
    password: Yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ).required("Password Required!"),
    role: Yup.string().required(" Fill In Role!"),
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
})(UserLogin);

export default FormikForms;  