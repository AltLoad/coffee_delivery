import { createContext, ReactNode, useState } from 'react'

interface CartType {
  name: string
  nameNoFormated: string
  amount: number
  price: number
  img: string
}

interface CartContextType {
  cartCoffees?: CartType[] | undefined
  setCartCoffees?: any
  setTotalItems?: any
  totalItems?: number
  setPagament?: any
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvides({ children }: CartContextProviderProps) {
  const [cartCoffees, setCartCoffees] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  return (
    <CartContext.Provider
      value={{ cartCoffees, setCartCoffees, setTotalItems }}
    >
      {children}
    </CartContext.Provider>
  )
}
