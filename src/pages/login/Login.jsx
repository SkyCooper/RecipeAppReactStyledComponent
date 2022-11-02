import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  const navigate = useNavigate();
  const userInfo = {
    username : "cooper"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate(-1);
    setUser(true)
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"< @cooper />"}</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="username.." type="text" />
          <StyledInput placeholder="password.." type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
