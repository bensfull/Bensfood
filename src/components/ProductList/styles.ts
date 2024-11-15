import styled from 'styled-components'

import { cores } from '../../styles/GlobalStyles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  /* padding: 32px 0; */
  background-color: ${cores.preta};
  padding: 0 15rem;


  

  ${Card} {
    background-color: ${cores.preta}
  }
`


export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 24px;
  margin-top: 48px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
