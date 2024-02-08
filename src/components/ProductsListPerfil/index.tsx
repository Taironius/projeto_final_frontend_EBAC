import { ContainerDefault } from '../../styles'
import { Container, List } from './styles'
import FoodApresentacao from '../../models/FoodApresentacao'
import ProductPerfil from '../ProductPerfil'

type Props = {
  foods: FoodApresentacao[]
}

const ProductsListPerfil = ({ foods }: Props) => {
  return (
    <Container>
      <ContainerDefault>
        <List>
          {foods.map((food) => (
            <ProductPerfil
              key={food.id}
              title={food.title}
              description={food.description}
              image={food.image}
              order={food.order}
              to={food.to}
              tittleButton={food.tittleButton}
            />
          ))}
        </List>
      </ContainerDefault>
    </Container>
  )
}

export default ProductsListPerfil
