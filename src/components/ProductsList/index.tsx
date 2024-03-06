import { ContainerDefault } from '../../styles'
import Product from '../Product'
import { Container, List } from './styles'
import { Food } from '../../pages/Home'

type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <ContainerDefault>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            title={food.titulo}
            score={food.avaliacao}
            description={food.descricao}
            infos={food.tipo}
            image={food.capa}
            more={food.more}
            to={food.to}
            tittleButton={food.tittleButton}
          />
        ))}
      </List>
    </ContainerDefault>
  </Container>
)

export default ProductsList
