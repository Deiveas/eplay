import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
