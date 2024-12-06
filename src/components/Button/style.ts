import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles/GlobalStyles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.preta : cores.branca)};
  color: #E66767;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.preta : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 2px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  /* margin-top: 30px; */
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;

  background-color: #FFEBD9;
`

export const ButtonLink = styled(Link)`
  border: 2px solid #FFEBD9;
  color: #E66767;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
