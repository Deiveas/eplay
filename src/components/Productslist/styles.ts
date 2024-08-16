import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
