import React from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";
import styled from "styled-components";
import imagem from '../assets/imagem.png'

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  place-items: center;
  row-gap: 24px;
  margin-top: 48px;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <CardsContainer>
        <RestaurantCard
          image={imagem}
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa!"
          rating={4.9}
          category="Japonesa"
        />
        
        <RestaurantCard
          image={imagem}
          title="La Dolce Vita Trattoria"
          description="Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis."
          rating={4.6}
          category="Italiana"
        />
        <RestaurantCard
          image={imagem}
          title="La Dolce Vita Trattoria"
          description="Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis."
          rating={4.6}
          category="Italiana"
        />
        <RestaurantCard
          image={imagem}
          title="La Dolce Vita Trattoria"
          description="Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis."
          rating={4.6}
          category="Italiana"
        />
        <RestaurantCard
          image={imagem}
          title="La Dolce Vita Trattoria"
          description="Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis."
          rating={4.6}
          category="Italiana"
        />
        <RestaurantCard
          image={imagem}
          title="La Dolce Vita Trattoria"
          description="Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis."
          rating={4.6}
          category="Italiana"
        />
      </CardsContainer>
      <Footer />
    </Container>
  );
};

export default Home;
