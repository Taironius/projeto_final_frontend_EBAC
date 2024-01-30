import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  max-width: 472px;
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`

export const TituloSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 20px;
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
