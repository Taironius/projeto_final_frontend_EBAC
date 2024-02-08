import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 0px 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
