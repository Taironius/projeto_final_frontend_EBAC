import { HeaderArea, HeaderContainer } from './styles'
import backHeader from '../../assets/images/headerBack.svg'
import logo from '../../assets/images/logo.svg'

const HeaderPerfil = () => (
  <HeaderArea style={{ backgroundImage: `url(${backHeader})` }}>
    <HeaderContainer>
      <h2>Restaurantes</h2>
      <img src={logo} alt="Efood" />
      <h2>0 Produto(s) no carrinho</h2>
    </HeaderContainer>
  </HeaderArea>
)

export default HeaderPerfil
