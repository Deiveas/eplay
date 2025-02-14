import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`
export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`
export const FooterSection = styled.div`
  margin-bottom: 64px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`
export const alignText = styled.p`
  text-align: center;
`
