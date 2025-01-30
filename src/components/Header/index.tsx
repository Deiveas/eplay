import { Link, useNavigate } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, CartButton } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const handleScrollToSection = (hash: string) => {
    // Navega para a rota principal (caso esteja em outra página)
    navigate('/')
    // Após a navegação, aguarde a renderização e role até a seção
    setTimeout(() => {
      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Pequeno delay para garantir a navegação
  }

  return (
    <HeaderBar>
      <div>
        <img src={logo} alt="EPLAY" />
        <nav>
          <Links>
            <LinkItem>
              <Link to="/">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link
                onClick={() => handleScrollToSection('#coming-soon')}
                to={''}
              >
                Em breve
              </Link>
            </LinkItem>
            <LinkItem>
              <Link onClick={() => handleScrollToSection('#on-sale')} to={''}>
                Promoções
              </Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
