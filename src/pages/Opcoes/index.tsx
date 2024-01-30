import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import sushi from '../../assets/images/sushi.svg'
import pasta from '../../assets/images/pasta.svg'

const pratos: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    score: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    more: 'Saiba mais',
    to: '/sushi',
    tittleButton: 'Comida Japonesa'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    more: 'Saiba mais',
    to: '/pasta',
    tittleButton: 'Comida Italiana'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    more: 'Saiba mais',
    to: '/pasta',
    tittleButton: 'Comida Italiana'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    more: 'Saiba mais',
    to: '/pasta',
    tittleButton: 'Comida Italiana'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    more: 'Saiba mais',
    to: '/pasta',
    tittleButton: 'Comida Italiana'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    score: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: pasta,
    more: 'Saiba mais',
    to: '/pasta',
    tittleButton: 'Comida Italiana'
  }
]

const Opcoes = () => (
  <>
    <ProductsList foods={pratos} />
  </>
)

export default Opcoes
