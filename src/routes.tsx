import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OpcoesJaponesas from './pages/OpcoesJaponesas'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/opcoes-japonesas" element={<OpcoesJaponesas />} />
  </Routes>
)

export default Rotas
