import { Link, useNavigate } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile,
  LogoContainer
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const handleScrollToSection = (hash: string) => {
    navigate('/')
    setTimeout(() => {
      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </Hamburguer>
        <LogoContainer>
          <img src={logo} alt="EPLAY" />
        </LogoContainer>
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
        <CartButton onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => handleScrollToSection('#coming-soon')} to={''}>
              Em breve
            </Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => handleScrollToSection('#on-sale')} to={''}>
              Promoções
            </Link>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
