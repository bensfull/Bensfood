// src/components/Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color:#93B4FF;
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #e74c3c;
  font-weight: bold;
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #e74c3c;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>efood</Title>
      <Subtitle>Viva experiências gastronômicas no conforto da sua casa</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
