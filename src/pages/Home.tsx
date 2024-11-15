import React, { useEffect, useState } from 'react';
import ProductLista from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

export type Restaurant = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  destacado: boolean;
  capa: string;
}

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(()=> {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then(res=> res.json())
    .then(res => setRestaurants(res))
  }, [])

  return (
    <>
      <Header/>
      <ProductLista games={restaurants} />
      <Footer/>
    </>
  );
};

export default Home;
