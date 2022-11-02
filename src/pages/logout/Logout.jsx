import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderText,
  HomeImg,
  ImgDiv,
  LogoutButton,
  LogoutContainer,
} from "./Logout.style";

import logout from "../../assets/logout.png";

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  setUser(false);
  return (
    <LogoutContainer>
      <HeaderText>enjoy your meal</HeaderText>
      <ImgDiv>
        <HomeImg src={logout} />
      </ImgDiv>
        <LogoutButton onClick={() => navigate("/")}> Return 🏠</LogoutButton>
    </LogoutContainer>
  );
};

export default Logout;
