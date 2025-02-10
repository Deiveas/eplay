import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import { parseToBrl } from '../../utils'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // Função para continuar com a compra
  const handleContinueToCheckout = () => {
    closeCart() // Fecha o carrinho
    navigate('/checkout') // Redireciona para o checkout
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={handleContinueToCheckout} // Usa a nova função
        >
          Continuar com a Compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
