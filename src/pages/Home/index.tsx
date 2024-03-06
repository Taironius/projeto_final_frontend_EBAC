import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [pratos, setPratos] = useState<Food[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])
  return (
    <>
      <Header />
      <ProductsList foods={pratos} />
    </>
  )
}

export default Home
