import { Card, Descricao, Modal, ModalContent, Prato, Titulo } from './styles'
import Button from '../Button'

import close from '../../assets/images/close.svg'
import esfiha from '../../assets/images/esfiha.svg'
import { ContainerDefault } from '../../styles'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  order: string
  image: string
  to: string
  tittleButton: string
}

const ProductPerfil = ({
  title,
  description,
  order,
  image,
  to,
  tittleButton
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          to={to}
          titleButton={tittleButton}
          onClick={() => setModalEstaAberto(true)}
        >
          {order}
        </Button>
      </Card>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ContainerDefault>
          <ModalContent>
            <header>
              <img
                src={close}
                alt=""
                onClick={() => setModalEstaAberto(false)}
              />
            </header>
            <Prato>
              <div>
                <img src={esfiha} alt="" />
              </div>
              <div>
                <h2>Pizza Marguerita</h2>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                </p>
                <br />
                <p>Serve: de 2 a 3 pessoas</p>
                <Button
                  to=""
                  titleButton=""
                  onClick={() => console.log('Botão comprar clicado')}
                >
                  Adicionar ao carrinho - R$ 60,90
                </Button>
              </div>
            </Prato>
          </ModalContent>
        </ContainerDefault>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductPerfil
