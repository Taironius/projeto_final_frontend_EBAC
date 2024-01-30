import { HeaderArea, HeaderContainer } from './styles'
import backHeader from '../../assets/images/headerBack.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderArea style={{ backgroundImage: `url(${backHeader})` }}>
    <HeaderContainer>
      <img src={logo} alt="Efood" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HeaderContainer>
  </HeaderArea>
)

export default Header
