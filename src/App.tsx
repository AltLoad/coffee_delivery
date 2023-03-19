import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'
import { CartContextProvides } from './contexts/GlobalContextProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvides>
          <Router />
        </CartContextProvides>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
