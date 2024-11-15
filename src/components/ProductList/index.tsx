import { Restaurant } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  games: Restaurant[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ games }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {games.map((game) => (
            <Product
              id={game.id}           
              tipo={game.tipo}
              descricao={game.descricao}
              capa={game.capa}
              destacado={game.destacado}  
              titulo={game.titulo}
              avaliacao={game.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
