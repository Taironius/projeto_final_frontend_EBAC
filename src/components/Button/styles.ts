import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled(Link)`
  background-color: ${cores.laranja};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
  margin-left: 8px;
  margin-bottom: 8px;
`
