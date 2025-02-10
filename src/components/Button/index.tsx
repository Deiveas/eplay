import React from 'react' // Importe o React
import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit' // Adicionado o tipo "submit"
  title: string
  to?: string
  onClick?: () => void // Corrigido para `onClick`
  children: React.ReactNode // Alterado para `React.ReactNode`
  variant?: 'primary' | 'secondary'
  disabled?: boolean // Adicionado a propriedade disabled
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled = false // Valor padrão para disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type} // Passa o tipo diretamente
        title={title}
        onClick={onClick} // Corrigido para `onClick`
        disabled={disabled} // Passa a propriedade disabled
      >
        {children}
      </S.ButtonContainer>
    )
  }

  // Verifica se `to` está definido para o tipo link
  if (!to) {
    console.error('A propriedade "to" é obrigatória para botões do tipo link.')
    return null
  }

  return (
    <S.ButtonLink to={to} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
