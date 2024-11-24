// import Button from "../Button"

import { Overlay, CartContainer, Sidebar, Quantity, Prices, CartItem } from "./indexx"

import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../store"
import { close,remove } from "../store/reducers/cart"
import { formataPreco } from "../ProductList"

const Cart = () => {
  const {isOpen,items}= useSelector((state :RootReducer)=> state.cart)

  const  dispacth = useDispatch()

  const closeCart =() => {
    dispacth(close())
  }

  const getTotalPrice = () =>{
    return items.reduce((acumulador, valorAtual) =>{
      return(acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispacth(remove(id))
  }

  return(
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button onClick={()=> removeItem(item.id)} type="button"/>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span className="texto">Valor Total</span>
          <span className="valor">{formataPreco(getTotalPrice())}</span>
        </Prices>
        {/* <Button title="Clique aqui para continuar com a compra" type="button">
            Continuar com a compra
        </Button> */}
      </Sidebar>
    </CartContainer>
  )
}

export  default Cart
