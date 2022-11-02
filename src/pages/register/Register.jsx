import React from "react";
import "./Register.style";
import { HeaderText, HomeImg, ImgDiv } from "./Register.style";
import constR from "../../assets/const.png";

const Register = () => {
  return (
    <div>
      <HeaderText>The Page can not be found</HeaderText>
      <ImgDiv>
        <HomeImg src={constR} />
      </ImgDiv>
    </div>
  );
};

export default Register;
