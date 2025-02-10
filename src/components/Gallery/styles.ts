import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); // Layout responsivo
  gap: 8px;

  @media (max-width: 768px) {
    margin: 16px;
  }
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  cursor: zoom-in;
  aspect-ratio: 1; // Mantém a proporção quadrada
  overflow: hidden; // Garante que a imagem não ultrapasse o contêiner

  > img {
    width: 50%;
    height: 50%;
    object-fit: cover; // Garante que a imagem cubra o espaço sem distorcer
    border: 2px solid ${colors.white};
    border-radius: 8px;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 90%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
