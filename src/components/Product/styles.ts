import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'
import { TagContainer } from '../Tag/style'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: white;
  /* border-radius: 8px; */
  position: relative;
  
  img{
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
  
  ${TagContainer} {
    margin-right: 8px;
  }
  
  
  .diferen{
    border: 2px solid #E66767;
    padding: 10px;
    
  }

  .button{
    background-color: #E66767;
    padding: 5px;
    color: white;
    
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color:#E66767;
  `

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 15px;
  display: block;
  margin-top: 16px;
  color:#E66767 ;
  font-weight: 400;

`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
