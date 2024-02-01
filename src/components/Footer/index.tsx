import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import {
  FooterArea,
  FooterDescricao,
  FooterLogo,
  SocialFooterContainer,
  SocialFooterLogo
} from './style'

const Footer = () => (
  <FooterArea>
    <FooterLogo src={logo} alt="Efood" />
    <SocialFooterContainer>
      <SocialFooterLogo src={instagram} alt="Instagram" />
      <SocialFooterLogo src={facebook} alt="Facebook" />
      <SocialFooterLogo src={twitter} alt="Twitter" />
    </SocialFooterContainer>
    <FooterDescricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </FooterDescricao>
  </FooterArea>
)

export default Footer
