import { ButtonContainer } from './styles'

type Props = {
  titleButton: string
  to?: string
  children: string
}

const Button = ({ to, children, titleButton }: Props) => (
  <ButtonContainer to={to as string} title={titleButton}>
    {children}
  </ButtonContainer>
)

export default Button
