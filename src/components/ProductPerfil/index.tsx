import { Card, Descricao, Titulo } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  order: string
  image: string
  to: string
  tittleButton: string
}

const ProductPerfil = ({
  title,
  description,
  order,
  image,
  to,
  tittleButton
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button to={to} titleButton={tittleButton}>
      {order}
    </Button>
  </Card>
)

export default ProductPerfil
