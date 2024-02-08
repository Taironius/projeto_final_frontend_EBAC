import { ContainerDefault } from '../../styles'
import { Container, List, Modal, ModalContent, Prato } from './styles'
import FoodApresentacao from '../../models/FoodApresentacao'
import ProductPerfil from '../ProductPerfil'

import close from '../../assets/images/close.svg'
import esfiha from '../../assets/images/esfiha.svg'
import Button from '../Button'

type Props = {
  foods: FoodApresentacao[]
}

const ProductsListPerfil = ({ foods }: Props) => (
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
      <Modal>
        <ContainerDefault>
          <ModalContent>
            <header>
              <img src={close} alt="" />
            </header>
            <Prato>
              <div>
                <img src={esfiha} alt="" />
              </div>
              <div>
                <h2>Pizza Marguerita</h2>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                </p>
                <br />
                <p>Serve: de 2 a 3 pessoas</p>
                <Button to="" titleButton="">
                  Adicionar ao carrinho - R$ 60,90
                </Button>
              </div>
            </Prato>
          </ModalContent>
        </ContainerDefault>
        <div className="overlay"></div>
      </Modal>
    </ContainerDefault>
  </Container>
)

export default ProductsListPerfil
