import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 768px) {
      padding-top: 200px;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;

    @media (max-width: 768px) {
      top: 16px;
    }
  }

  @media (max-width: 768px) {
    height: 400px; /* Ajuste a altura da imagem para dispositivos móveis */
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 100%;
  }
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 16px;
  }
`
