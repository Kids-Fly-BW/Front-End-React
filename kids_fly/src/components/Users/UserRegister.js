import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
import styled from "styled-components";
import axios from 'axios'
import {useHistory} from 'react-router-dom'



// Material UI Styles Here //
const FormWrapper = styled(ValidatorForm)`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  h2 {
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

// Form Component //
const UserRegister = props => {
  const classes = useStyles();

  const history = useHistory()


  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = event => {
    event.preventDefault();
    //validation
    axios.post('https://kidfly.herokuapp.com/api/auth/register', user)
    .then(response => {
      console.log('New User sucessfully created!', response)
      history.push('/login')
    })
    .catch(error => {
      console.log(`Unable to create new user. ${user}`, error)
    })
  
  };

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    // console.log(user);
  };
console.log('test', user)
  return (
    <FormWrapper
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <h2>Sign Up Form</h2>
        <div>
          <TextValidator
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChanges}
            variant="outlined"
            validators={["required", "isEmail"]}
            errorMessages={["this field is required"]}
            type="email"
          />
        </div>
        <div>
          <TextValidator
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChanges}
            variant="outlined"
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
        </div>
        <div>
          <TextValidator
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChanges}
            type ='password'
            variant="outlined"
            validators={[
              "required",
              "matchRegexp:^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
            ]}
            errorMessages={[
              "At least one upper case letter, one lower case letter, one digit, one special character, and a minimum length of 8."
            ]}
            // type="password"
          />
        </div>
        <div>
          <ButtonWrapper>
            <Button variant="outlined" color="primary" type="submit">
              Sign Up!
            </Button>
          </ButtonWrapper>
        </div>
      </div>
    </FormWrapper>
  );
};

export default (UserRegister);
