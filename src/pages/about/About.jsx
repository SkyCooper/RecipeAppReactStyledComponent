import React from "react";
import { AboutContainer, HeaderText, HomeImg, ImgDiv, Text } from "./About.style";
import avatar from "../../assets/avatar.png"

const About = () => {
  return (
    <AboutContainer>
      <HeaderText>
        <h1>Cooper Sky</h1>
      </HeaderText>
      <ImgDiv>
        <HomeImg src={avatar} />
      </ImgDiv>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam at consequatur voluptatem, voluptates vero consectetur vitae. Vero, deserunt. Eius eligendi, nisi incidunt eveniet non fuga ab quas natus perferendis quaerat. Officiis nihil natus omnis incidunt voluptatum at autem velit error quam expedita nisi impedit magnam hic, tempore placeat ex, fugiat harum consequatur iste necessitatibus molestias doloremque. Laborum accusantium soluta, nemo veniam harum dicta omnis perferendis maxime totam vel incidunt voluptates qui iure repudiandae officiis, eos, pariatur neque quisquam?</Text>
    </AboutContainer>
  );
};

export default About;
