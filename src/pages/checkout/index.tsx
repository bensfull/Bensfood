import Button from '../../components/Button'
import Card from '../../components/Card'
import { ImputGroup, Row} from './styles'

const checkout = () => {

  return (
    <div className="container">
      <Card title="Entrega">
        <>
          <Row>
            <ImputGroup>
              <label htmlFor="FullName">Quem irá receber</label>
              <input id="FullName" type="text" />
            </ImputGroup>
            <ImputGroup>
              <label htmlFor="adrress">Endereço</label>
              <input id="adrress" type="text" />
            </ImputGroup>
            <ImputGroup>
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </ImputGroup>
            <ImputGroup>
              <label htmlFor="cep">Cep</label>
              <input id="cep" type="text" />
            </ImputGroup>
            <ImputGroup>
              <label htmlFor="numero">Numero</label>
              <input id="numero" type="number" />
            </ImputGroup>
            <ImputGroup>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input id="complemento" type="text" />
            </ImputGroup>
          </Row>
        </>
      </Card>
      <Button title="Clique para finalizar a compra" type="button">
        Continuar com o pagamento
      </Button>
      <Button title="Clique para finalizar a compra" type="button">
        Voltar para o carrinho
      </Button>
    </div>
  )
}

export default checkout
