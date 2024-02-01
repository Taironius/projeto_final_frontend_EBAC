import { HeaderArea, HeaderContainer } from './styles'
import backHeader from '../../assets/images/headerBack.svg'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <HeaderArea style={{ backgroundImage: `url(${backHeader})` }}>
    <HeaderContainer>
      <h2>Restaurantes</h2>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <h2>0 Produto(s) no carrinho</h2>
    </HeaderContainer>
  </HeaderArea>
)

export default HeaderPerfil
