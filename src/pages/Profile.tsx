import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import imagens from '../assets/image 1.png'
import carrinho from '../assets/carrinho.svg'
import logo from '../assets/logo.svg'
import Footer from "../components/Footer";

const menuItems = [
  {
    name: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: imagens,
    category: "Italiana",
  },
  {
    name: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: imagens,
    category: "Italiana",
  },
  {
    name: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: imagens,
    category: "Italiana",
  },
  {
    name: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: imagens,
    category: "Italiana",
  },
  {
    name: "Pizza Marguerita",
    description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: imagens,
    category: "Italiana",
  },
  {
    name: "Sushi Especial",
    description: "Sushis variados e frescos, preparados com os melhores ingredientes.",
    image: imagens,
    category: "Japonesa",
  },
  
];

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 20px;
  color: #333;
  text-align: center;
  background-color:#93B4FF;
`;

const MenuContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  margin-top: 48px;
  place-items: center;
`;

const MenuItemCard = styled.div`
  width: 320px;
  height: 338px;
  border: 1px solid #e74c3c;
  padding: 7px;
  background-color: #e74c3c;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;



const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1{
        font-size: 18px;
    }

`

const LinkCart = styled.a`
    display: flex;

    img {
        margin-left: 16px;
    }
    

`


const AddToCartButton = styled.button`
  width: 100%;
  padding: 5px;
  background-color: #f2f2f2;
  color: #2c2828;
  border: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #c0392b;
  }
`;


const Profile: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const filteredMenuItems = menuItems.filter((item) => item.category === category);

  return (
    <ProfileContainer>
      <Header>
        <Div>
            <h1>Restaurantes</h1>
                {/* <h1>Restaurantes - {category}</h1> */}
            
            <img src={logo} alt="Eplay" />

            <LinkCart>
                <a href="#">
                    0 - produtos(s)
                    <img src={carrinho} alt="Eplay" />
                </a>
            </LinkCart>
        </Div>
        
      </Header>
      <MenuContainer>
        {filteredMenuItems.map((item, index) => (
          <MenuItemCard key={index}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "168px", objectFit: "cover" }} />
            <h2 style={{fontSize: '16px', textAlign:"left", marginBottom: '15px'}}>{item.name}</h2>
            <p style={{ color: 'black', fontSize: '14px', marginBottom: '10px', textAlign: "left" }}>{item.description}</p>
            <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
          </MenuItemCard>
        ))}
      </MenuContainer>
        <Footer/>

    </ProfileContainer>
  );
};

export default Profile;
