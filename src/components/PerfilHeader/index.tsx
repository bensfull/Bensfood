import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { Dish } from "../../pages/Profile";

import image from '../../assets/fundo.svg'
import logo from '../../assets/logo (1).svg'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";


import { open } from "../store/reducers/cart";

const HeaderContainer = styled.header`  
  background-image:url(${image});
  width: 100%;
  height: 200px ;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  align-items: center;
  margin: 0 auto; 

  h1 {
    font-size: 18px;
  }
`;

const LinkCart = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
  a{
    color: #E66767;
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
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 20px 15rem;
  color: #FFFFFF;
  font-size: 32px;
  position: relative;
  .over{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.63);
  }
  
  ${Div}{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h3{
      padding-bottom: 150px;
    }
  }
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
            <Div>
              <h1 style={{color:'#E66767'}}>Restaurantes</h1>
              <img src={logo} alt="efood" />
              <LinkCart onClick={openCart}>
                  <a style={{fontWeight:'900', fontSize:'18px'}} href="#"> {items.length} produto(s) no carrinho</a>
              </LinkCart>
            </Div>
          </HeaderContainer>

        <Banner style={{backgroundImage:`url(${restaurant?.capa})`}}>
          <div className="over"></div>
          <Div>
            <h3 style={{fontSize:'32px', fontStyle: 'italic', fontWeight:'100', opacity:'.9'}}>{restaurant?.tipo}</h3>
            <h3 style={{fontSize:'32px', zIndex:'1'}}>{restaurant?.titulo}</h3>
          </Div>
        </Banner>
    </>
    
  );
};

export default Header;