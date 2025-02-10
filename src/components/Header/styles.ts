import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; // Para posicionar a logo corretamente em telas menores

  nav {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const LogoContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%); // Centraliza a logo em telas menores
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px; // Espaçamento entre o texto e a imagem

  img {
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
