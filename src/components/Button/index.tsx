import { ButtonContainer } from './styles'

type Props = {
  titleButton: string
  to?: string
  children: string
  onClick: () => void
}

const Button = ({ to, children, titleButton, onClick }: Props) => (
  <ButtonContainer to={to as string} title={titleButton} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
