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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.laranja};
  height: auto;
  color: ${cores.branco};
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: flex-end;
    padding-right: 8px;
    padding-top: 8px;
  }
`

export const Prato = styled.div`
  display: flex;
  padding: 18px;

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400px;
    line-height: 22px;
  }
  a {
    margin-top: 16px;
    background-color: ${cores.rosaClaro};
    color: ${cores.laranja};
  }

  img {
    margin-right: 16px;
  }
`
