import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Adicionado para permitir quebra de linha em telas menores */

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  /* Media Query */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .Links {
      margin-left: 0;
    }

    .LinkCart {
      margin-top: 16px;
    }
  }

  nav {
    margin-left: 100px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
