import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.Azul};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? ' 8px 16px' : '5px 6px')};
  margin-right: 6px;
  display: inline-block;
`
