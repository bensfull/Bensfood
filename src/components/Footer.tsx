import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
margin-top: 50px;
  background-color: #93B4FF;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #333;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © efood - Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
