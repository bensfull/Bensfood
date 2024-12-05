
import { Overlay, CartContainer, Sidebar, Quantity, Prices, CartItem } from "./indexx"

import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../store"
import { close,remove } from "../store/reducers/cart"
import { formataPreco } from "../ProductList"
import Button from "../Button"
import Checkout from "../../pages/checkout"


import { useState } from "react"  

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  
  const dispatch = useDispatch()
  
  const [showCheckout, setShowCheckout] = useState(false)  
  
  const closeCart = () => {
    dispatch(close())
  }
  
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }


  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 ? ( 
          <p style={{textAlign:'center'}}>O carrinho está vazio</p>
        ) : !showCheckout ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button"/>
                </CartItem>
              ))}
            </ul>
            <Prices style={{ paddingBottom: "20px" }}>
              <span className="texto">Valor Total</span>
              <span className="valor">{formataPreco(getTotalPrice())}</span>
            </Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              onClick={() => setShowCheckout(true)}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <Checkout setShowCheckout={setShowCheckout} totalPrice={getTotalPrice()} />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
