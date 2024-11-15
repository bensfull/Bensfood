// import styled from "styled-components";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Footer from "../components/Footer";
// import logo from '../assets/logo.svg';
// import fechar from '../assets/fechar.png';
// import fundo from '../assets/Vector.png';

// const ProfileContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Header = styled.div`
//   width: 100%;
//   padding: 20px;
//   color: #333;
//   text-align: center;
//   background-foto: url(${fundo});
// `;

// const MenuContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 24px;
//   margin-top: 48px;
//   place-items: center;
// `;

// const MenuItemCard = styled.div`
//   width: 320px;
//   height: 338px;
//   border: 1px solid #e74c3c;
//   padding: 7px;
//   background-color: #e74c3c;
//   border-radius: 8px;
//   text-align: center;
// `;

// const Div = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   h1 {
//     font-size: 18px;
//   }
// `;

// const LinkCart = styled.a`
//   display: flex;
//   img {
//     margin-left: 16px;
//   }
// `;

// const AddToCartButton = styled.button`
//   width: 100%;
//   padding: 5px;
//   background-color: #f2f2f2;
//   color: #2c2828;
//   border: none;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.73);
//   }
// `;

// const ModalContent = styled.div`
//   z-index: 1;
//   position: relative;
//   max-width: 1024px;
//   height: 344px;
//   display: flex;
//   gap: 15px;
//   padding: 30px;
//   background-color: #c0392b;

//   div {
//     width: 656px;
//     color: #fff;
//     h4 {
//       font-size: 18px;
//       font-weight: bold;
//       margin-bottom: 15px;
//     }
//     p {
//       font-size: 14px;
//       margin-bottom: 20px;
//     }
//   }

//   img {
//     width: 280px;
//     height: 280px;
//     object-fit: cover;
//   }

//   .fechar {
//     position: absolute; 
//     top: 8px;
//     right: 10px;
//     width: 16px;
//     height: 16px;
//     cursor: pointer; 
//   }
// `;

// type MenuItemProps = {
//   item: {
//     nome: string;
//     descricao : string;
//     foto: string;
//     serve: string;
//     valor: string;
//   };
//   onClick: () => void;
// };

// const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => (
//   <MenuItemCard>
//     <img src={item.foto} alt={item.nome} style={{ width: "100%", height: "168px", objectFit: "cover" }} />
//     <h2 style={{ fontSize: '16px', textAlign: "left", marginBottom: '15px' }}>{item.nome}</h2>
//     <p style={{ color: 'black', fontSize: '14px', marginBottom: '10px', textAlign: "left" }}>{item.descricao  }</p>
//     <AddToCartButton onClick={onClick}>Mais detalhes</AddToCartButton>
//   </MenuItemCard>
// );

// const Profile: React.FC = () => {
//   const { category } = useParams<{ category: string }>();
//   const [menuItems, setMenuItems] = useState<any[]>([]);
//   const [modalItem, setModalItem] = useState<any | null>(null);

//   useEffect(() => {
//     // Fetch data from API
//     const fetchMenuItems = async () => {
//       try {
//         const response = await fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes/");
//         const data = await response.json();
//         setMenuItems(data.filter((item: any) => item.category === category));
//       } catch (error) {
//         console.error("Error fetching menu items:", error);
//       }
//     };
//     fetchMenuItems();
//   }, [category]);

//   const openModal = (item: any) => {
//     setModalItem(item);
//   };

//   const closeModal = () => {
//     setModalItem(null);
//   };

  // return (
  //   <ProfileContainer>
  //     <Header>
  //       <div>
  //         <h4>{category}</h4>
  //       </div>
  //       <Div>
  //         <h1>Restaurantes</h1>
  //         <img src={logo} alt="Eplay" />
  //         <LinkCart>
  //           <a href="#">0 - produto(s)</a>
  //         </LinkCart>
  //       </Div>
//       </Header>

//       <MenuContainer>
//         {menuItems.map((item, index) => (
//           <MenuItem key={index} item={item} onClick={() => openModal(item)} />
//         ))}
//       </MenuContainer>

//       <Footer />

//       {modalItem && (
//         <Modal>
//           <ModalContent>
//             <img src={modalItem.foto} alt={modalItem.nome} />
//             <div>
//               <img className="fechar" src={fechar} alt="Fechar" onClick={closeModal} />
//               <h4>{modalItem.nome}</h4>
//               <p>{modalItem.descricao }</p>
//               <p>Serve: {modalItem.serve} Pessoas</p>
//               <AddToCartButton>Adicionar ao carrinho - R${modalItem.valor}</AddToCartButton>
//             </div>
//           </ModalContent>
//           <div className="overlay" onClick={closeModal}></div>
//         </Modal>
//       )}
//     </ProfileContainer>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/Cardapio';
import Footer from '../components/Footer';
import Header from '../components/PerfilHeader';

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
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id]);

  if (!restaurant) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {/* <h1>{restaurant.titulo}</h1>
      <img src={restaurant.capa} alt={restaurant.titulo} />
      <p>{restaurant.descricao}</p>
      <h2>Cardápio</h2> */}
      {/* <ul>
        {restaurant.cardapio.map((dish) => (
          <li key={dish.id}>
            <img src={dish.foto} alt={dish.nome} />
            <h3>{dish.nome}</h3>
            <p>{dish.descricao}</p>
            <p>Preço: R${dish.preco.toFixed(2)}</p>
            <p>Porção: {dish.porcao}</p>
          </li>
        ))}
      </ul> */}
        <Header/>
        <ProductList games={restaurant.cardapio}/>
        <Footer/>
    </div>
  );
};

export default Profile;
