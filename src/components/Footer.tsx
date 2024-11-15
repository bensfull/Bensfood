import React from "react";
import styled from "styled-components";
import logo from '../assets/logo (1).svg'

import icone from '../assets/Group (1).svg'
import icon from '../assets/Group.svg'
import cone from '../assets/Vector (5).svg'


const FooterContainer = styled.footer`
margin-top: 50px;
  background-color: #FFEBD9;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 298px;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #333;
  padding-top: 40px;
`;




const Footer: React.FC = () => {
  return (
    <FooterContainer>
     <img src={logo} alt="" />

     <div style={{paddingTop: '30px'}}>
        <img style={{paddingLeft:'9px'}} src={icon} alt="" />
        <img style={{paddingLeft:'9px'}} src={icone} alt="" />
        <img style={{paddingLeft:'9px'}} src={cone} alt="" />
     </div>
      <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, <br/>
      a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
