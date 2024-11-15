import React from "react";
import styled from "styled-components";

import image from '../assets/fundo.svg'
import logo from '../assets/logo (1).svg'

const HeaderContainer = styled.header`  
  background-image:url(${image});
  width: 100%;
  height: 200px  ;
  text-align: center;
  padding: 20px;
`;

const Title = styled.img`
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 26px;
  color: #e74c3c;
  padding-top: 30px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Subtitle>Viva experiências gastronômicas <br/>no conforto da sua casa</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
