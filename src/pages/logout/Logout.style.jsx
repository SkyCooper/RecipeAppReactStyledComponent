import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const LogoutContainer = styled(Flex)`
  flex-direction: column;
  background: #e5bbb0;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
`;


export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

export const HomeImg = styled.img`
  max-width: 950px;
  border-radius: 5rem;
`;

export const HeaderText = styled.h1`
  font-size: 4rem;
  color: #e17950;
  text-align: center;
`;

export const LogoutButton = styled.button`
padding: 0.5rem 3rem;
  font-size: 2rem;
  background: white;
  border-radius: 5px;
  color: #878e14;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  background-color: #d1da71;
`;
