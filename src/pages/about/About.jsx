import React from "react";
import { HeaderText, HomeImg, ImgDiv } from "./About.style";
import avatar from "../../assets/avatar.png"

const About = () => {
  return (
    <div>
      <HeaderText>
        <h1>Cooper Sky</h1>
      </HeaderText>
      <ImgDiv>
        <HomeImg src={avatar} />
      </ImgDiv>
    </div>
  );
};

export default About;
