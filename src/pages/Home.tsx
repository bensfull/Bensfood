import React, { useEffect, useState } from 'react';
import ProductLista from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGetFeaturedGameQuery } from '../services/api';
import { Dish } from './Profile';

export type Restaurant = {
  cardapio: Dish[];
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  destacado: boolean;
  capa: string;
}

const Home: React.FC = () => {
  const { data: restaurants = [], isLoading, error } = useGetFeaturedGameQuery();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar dados.</p>;
  }

  return (
    <>
      <Header/>
      <ProductLista games={restaurants} />
      <Footer/>
    </>
  );
};

export default Home;
