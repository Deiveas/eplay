import React from 'react' // Importe o React
import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void // Corrigido para `onClick`
  children: React.ReactNode // Alterado para `React.ReactNode`
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick} // Corrigido para `onClick`
      >
        {children}
      </ButtonContainer>
    )
  }

  // Verifica se `to` está definido para o tipo link
  if (!to) {
    console.error('A propriedade "to" é obrigatória para botões do tipo link.')
    return null
  }

  return (
    <ButtonLink to={to} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
