import styled from 'styled-components';
import { cores } from '../../styles/GlobalStyles';
import { Card } from '../Product/styles';

export const Container = styled.section`
  background-color: ${cores.preta};
  padding: 0 15rem;

  ${Card} {
    background-color: ${cores.preta};
  }

  @media (max-width: 1024px) {
    padding: 0 5rem; 
  }

  @media (max-width: 768px) {
    padding: 0 2rem; 
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 16px; 
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px; 
  }
`;
