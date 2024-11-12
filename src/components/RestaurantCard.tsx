// src/components/RestaurantCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface RestaurantCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  category: string; // Adicione a categoria aqui
}

const Card = styled.div`
  width: 250px;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background-color: #f9f9f9;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 1.2em;
  color: #e74c3c;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #333;
  padding: 0 10px;
`;

const CardRating = styled.div`
  font-size: 0.9em;
  color: #ff9800;
`;

const SaibaMaisButton = styled(Link)`
  display: inline-block;
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  text-decoration: none;
  font-size: 1em;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: #c0392b;
  }
`;

const RestaurantCard: React.FC<RestaurantCardProps> = ({ image, title, description, rating, category }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardRating>Avaliação: {rating}</CardRating>
      <SaibaMaisButton to={`/profile/${category}`}>Saiba mais</SaibaMaisButton>
    </Card>
  );
};

export default RestaurantCard;
