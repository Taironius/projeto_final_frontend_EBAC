import { Card, Descricao, Infos, Titulo, TituloSection } from './styles'
import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  title: string
  score: string
  description: string
  infos: string[]
  image: string
  more: string
  to: string
  tittleButton: string
}

const Product = ({
  title,
  score,
  description,
  more,
  infos,
  image,
  to,
  tittleButton
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TituloSection>
      <Titulo>{title}</Titulo>
      <Titulo>
        {score}
        <img src={estrela} alt="estrela" />
      </Titulo>
    </TituloSection>
    <Descricao>{description}</Descricao>
    <Button to={to} titleButton={tittleButton}>
      {more}
    </Button>
  </Card>
)

export default Product
