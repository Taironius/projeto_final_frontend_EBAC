import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: '#FFEBD9',
  laranja: '#E66767',
  brancaTexto: '#FFEBD9',
  branco: '#FFFFFF',
  background: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.background};
    color: ${cores.laranja};
  }
`

export const ContainerDefault = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
