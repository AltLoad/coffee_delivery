import { createContext } from 'react'

interface CartContextType {
  count: number
  price: number
  coffee: string
}

const CartContext = createContext({} as CartContextType)
