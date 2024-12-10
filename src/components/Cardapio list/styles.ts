import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'
import { TagContainer } from '../Tag/style'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: #E66767;
  position: relative;
  width: 320px;
  padding: 8px;
  background-repeat: no-repeat;
  
  img{
    display: block;
    border-radius: 4px;
    width: 304px;
    height: 167px;
    max-width: 100%;
    max-height: 217px;
    object-fit: cover;
  }
  
  ${TagContainer} {
    margin-right: 8px;
  }
  
  
  .diferen{
    border: 2px solid ${cores.cinza};
    padding: 10px;
    
  }

  .button{
    background-color: ${cores.Azul};
    padding: 5px;
    color: white;
    
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color:white ;
  `

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 15px;
  display: block;
  margin-top: 16px;
  color:white;

`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`


export const AddToCartButton = styled.button`
  width: 230px;
  padding: 8px;
  background-color: #f2f2f2;
  color: #2c2828;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  z-index: 1;
  position: relative;
  max-width: 1024px;
  max-height: 344px;
  display: flex;
  gap: 15px;
  align-items: center; 
  justify-content: space-around;
  background-color: #c0392b;
  padding: 20px;

  div {
    width: 656px;
    color: #fff;
    
    h4 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }


  .fechar {
    position: absolute; 
    top: 8px;
    right: 10px;
    width: 16px;
    height: 16px;
    cursor: pointer; 
  }
`;