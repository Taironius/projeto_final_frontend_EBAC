import HeaderPerfil from '../../components/HeaderPerfil'
import PerfilApresentacao from '../../components/PerfilApresentacao'
import { FoodApresentacao } from '../../models/Food'
import pizza from '../../assets/images/pizza.svg'
import ProductsListPerfil from '../../components/ProductsListPerfil'

const pratosPerfil: FoodApresentacao[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    order: 'Adicionar ao Carrinho',
    to: '',
    tittleButton: 'Comprar'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    order: 'Adicionar ao Carrinho',
    to: '',
    tittleButton: 'Comprar'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    order: 'Adicionar ao Carrinho',
    to: '',
    tittleButton: 'Comprar'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    order: 'Adicionar ao Carrinho',
    to: '',
    tittleButton: 'Comprar'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    order: 'Adicionar ao Carrinho',
    to: '',
    tittleButton: 'Comprar'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    order: 'Adicionar ao Carrinho',
    to: '',
    tittleButton: 'Comprar'
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <PerfilApresentacao />
    <ProductsListPerfil foods={pratosPerfil} />
  </>
)

export default Perfil
