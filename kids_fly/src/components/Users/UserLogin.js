import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ValidatorForm,
  TextValidator
} from "react-material-ui-form-validator";
// import { SignUp } from "../../actions/index";
import styled from "styled-components";
import axios from 'axios'

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
const UserLogin = props => {
  const classes = useStyles();

  const [user, setUser] = React.useState({
    username: "",
    password: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    //validation
    axios
      .post(
        "https://kidfly.herokuapp.com/api/auth/login",
        user
      )
      .then(response => {
        console.log("Successful Login", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("ID", response.data.userID);
        props.history.push("/booking");
      })
      .catch(error => {
        console.log('Unable to login. ', error);
      });
  };

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    // console.log(user);
  };

  return (
    <FormWrapper
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <h2>Login Form</h2>
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
            variant="outlined"
            validators={["required"]}
            errorMessages={["this field is required"]}
            type="password"
          />
        </div>
        <ButtonWrapper>
          <Button variant="outlined" color="primary" type="submit">
            Log-In
          </Button>
        </ButtonWrapper>
      </div>
    </FormWrapper>
  );
};

export default UserLogin;

