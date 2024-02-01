import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterArea = styled.footer`
  background-color: ${cores.rosaClaro};
  height: 298px;
  display: flex;
  flex-direction: column;
`
export const FooterLogo = styled.img`
  height: 57.5px;
  margin-top: 40px;
`

export const SocialFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32.5px;
`

export const SocialFooterLogo = styled.img`
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterDescricao = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  width: 480px;
  margin: 80px auto 0;
`
