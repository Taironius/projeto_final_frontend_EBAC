import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.rosaClaro};
  width: 320px;
  position: relative;
  padding: 8px;
  margin-top: 56px;

  a {
    width: 100%;
    background-color: ${cores.rosaClaro};
    color: ${cores.laranja};
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: 900;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-bottom: 8px;
`
