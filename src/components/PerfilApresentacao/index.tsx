import {
  ApresentacaoArea,
  ApresentacaoAreaFiltro,
  EspecialidadeComida,
  OrigemComida
} from './styles'
import backApresentacao from '../../assets/images/backApresentacao.svg'
import { ContainerDefault } from '../../styles'

const PerfilApresentacao = () => (
  <ApresentacaoArea style={{ backgroundImage: `url(${backApresentacao})` }}>
    <ApresentacaoAreaFiltro>
      <ContainerDefault>
        <OrigemComida>Italiana</OrigemComida>
        <EspecialidadeComida>La Dolce Vita Trattoria</EspecialidadeComida>
      </ContainerDefault>
    </ApresentacaoAreaFiltro>
  </ApresentacaoArea>
)

export default PerfilApresentacao
