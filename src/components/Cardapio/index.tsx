import { Dish, Restaurant } from '../../pages/Profile';
import Product from '../Cardapio list';
import { Container, List } from './styles';

type Props = {
  games: Dish[];
};

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};

const ProductList = ({ games }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {games.map((game) => (
            <Product
              key={game.id} 
              nome={game.nome}
              id={game.id}
              porcao={game.porcao}
              descricao={game.descricao}
              foto={game.foto}
              preco={game.preco}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ProductList;
