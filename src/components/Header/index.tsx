import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import * as S from './styles'

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

  // Função combinada para fechar o menu e rolar para a seção
  const handleMenuAndScroll = (hash: string) => {
    setIsMenuOpen(false) // Fecha o menu
    handleScrollToSection(hash) // Rola para a seção
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
        <S.LogoContainer>
          <h1>
            <img src={logo} alt="EPLAY" />
          </h1>
        </S.LogoContainer>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link title="Clique aqui para acessar a Home" to="/">
                Home
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <Link
                title="Clique aqui para acessar a página de categorias"
                to="/categories"
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a seção de em breve"
                onClick={() => handleScrollToSection('#coming-soon')}
                to={''}
              >
                Em breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a seção de promoções"
                onClick={() => handleScrollToSection('#on-sale')}
                to={''}
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </nav>
        <S.CartButton role="button" onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a página home"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a página categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              onClick={() => handleMenuAndScroll('#coming-soon')} // Usa a função combinada
              to={''}
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              onClick={() => handleMenuAndScroll('#on-sale')} // Usa a função combinada
              to={''}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
