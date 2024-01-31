import { ContainerDefault } from '../../styles'
import Product from '../Product'
import { Container, List } from './styles'
import Food from '../../models/Food'

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
            title={food.title}
            score={food.score}
            description={food.description}
            infos={food.infos}
            image={food.image}
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
