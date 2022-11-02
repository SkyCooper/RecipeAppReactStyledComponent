import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  background: #bc9ecf;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
`;

export const HeaderText = styled.h1`
  font-size: 4rem;
  color: #faf8f8;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 2rem;
  text-align: justify;
  max-width: 50vw;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

export const HomeImg = styled.img`
  max-width: 150px;
`;