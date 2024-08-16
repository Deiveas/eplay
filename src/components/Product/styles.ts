import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 4px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
  }
`
