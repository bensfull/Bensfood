import styled from "styled-components";
import { cores } from "../../styles/GlobalStyles";
// import { ButtonContainer } from "../Button/style";
import { TagContainer } from "../Tag/style";

import fechar from '../../assets/lixeira.svg'


export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open{
    display: flex;
  }

`

export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 1;
  padding: 30px 9px 0 ;
  max-width: 380px;
  width: 100%;

  
`

export const Prices = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%; 
  .texto {
    text-align: left; 
    color: ${cores.cinza_claro};
    font-size: 14px;
  }
  
  .valor {
    text-align: right; 
    font-size: 12px;
    color: ${cores.branca};
  }

`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;
  `

export const CartItem = styled.li`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${cores.cinza_claro};
  padding: 10px;
  background-color: #FFEBD9;

  img{
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 30px;
  }

  h3{
    color: ${cores.Azul};
    font-weight: bold;
    font-size:16px ;
  }
  span{
    padding-top: 14px;
    display: block;
    color: ${cores.Azul};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer}{
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button{
    background-image: url(${fechar});
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    color: blue;
    position: absolute;
    bottom: 14px;
    right: 5px;
  }
`
