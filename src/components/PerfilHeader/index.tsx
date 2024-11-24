import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { Dish } from "../../pages/Profile";

import image from '../../assets/fundo.svg'
import logo from '../../assets/logo (1).svg'
import banner from '../../assets/banner.svg'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";


import { open } from "../store/reducers/cart";

const HeaderContainer = styled.header`  
  background-image:url(${image});
  width: 100%;
  height: 200px ;
  text-align: center;
  padding: 20px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 18px;
  }
`;

const LinkCart = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
`;

const Title = styled.img`
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 26px;
  color: #e74c3c;
  padding-top: 30px;
`;

const Banner = styled.div`  
  background-image:url(${banner});
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 20px 15rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;


export interface Restaurant {
    titulo: string;
    tipo: string;   
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: Dish[];
  }

const Header: React.FC = () => {
  const  dispacth = useDispatch()
  const {items} = useSelector((state: RootReducer) => state.cart)

  const openCart =() => {
    dispacth(open())
    
  }

    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  
    useEffect(() => {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setRestaurant(res))
    }, [id]);

  return (
    <>
        <HeaderContainer>
            <div>
            <h4>Restaurante</h4>
            </div>
            <Div>
            <h1>Restaurantes</h1>
            <img src={logo} alt="efood" />
            <LinkCart onClick={openCart}>
                <a href="#"> {items.length}- produto(s)</a>
            </LinkCart>
            </Div>
        </HeaderContainer>

        <Banner>
            <h3 style={{fontSize:'32px', fontStyle: 'italic', fontWeight:'0'}}>{restaurant?.tipo}</h3>
            <h3 style={{fontSize:'32px'}}>{restaurant?.titulo}</h3>
        </Banner>
    </>
    
  );
};

export default Header;