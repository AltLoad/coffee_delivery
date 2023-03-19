import { HeaderContainer } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { useContext } from 'react'
import { CartContext } from '../../App'

export function Header() {
  const { cartCoffees } = useContext(CartContext)

  const number = cartCoffees.length

  return (
    <HeaderContainer>
      <span>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </span>
      <nav>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCartSimple size={32} />
          <span>{number}</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
