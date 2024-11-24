
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/Cardapio';
import Footer from '../components/Footer';
import Header from '../components/PerfilHeader';
import { useGetGameQuery } from '../services/api';

export type Dish= {
  porcao: string;
  foto: string;
  preco: number;  
  id: number;
  nome: string;
  descricao: string;
}

export interface Restaurant {
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Dish[];
}

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {data:restaurant} = useGetGameQuery(id!)

  if (!restaurant) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
        <Header/>
        <ProductList games={restaurant.cardapio}/>
        <Footer/>
    </div>
  );
};

export default Profile;
