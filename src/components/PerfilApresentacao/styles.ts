import styled from 'styled-components'
import { cores } from '../../styles'

export const ApresentacaoArea = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const ApresentacaoAreaFiltro = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
`

export const OrigemComida = styled.h3`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
`

export const EspecialidadeComida = styled(OrigemComida)`
  font-weight: 900;
  position: absolute;
  bottom: 32px;
`
