import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'

interface CartType {
  name: string
  nameNoFormated: string
  amount: number
  price: number
  img: string
}

interface CartContextType {
  cartCoffees: CartType[] | undefined
  setCartCoffees: any
  setTotalItems: any
  totalItems: number
}

export const CartContext = createContext({} as CartContextType)

export function App() {
  const [cartCoffees, setCartCoffees] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider
        value={{ cartCoffees, setCartCoffees, setTotalItems }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContext.Provider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
