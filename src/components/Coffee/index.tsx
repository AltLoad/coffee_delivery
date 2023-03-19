import { Minus, Plus, Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/GlobalContextProvider'
import { ContainerSelectedCoffees, SelectedCoffees } from './styles'

export function Coffee() {
  const { cartCoffees, setCartCoffees } = useContext(CartContext)

  function amountOfCoffees(type: string, name: string) {
    if (type === 'add') {
      const newAmount = cartCoffees!.map((element) => {
        if (element.name === name) {
          return { ...element, amount: element.amount + 1 }
        }
        return element
      })

      setCartCoffees(newAmount)
    }
    if (type === 'remove') {
      cartCoffees!.forEach((element) => {
        if (element.name === name) {
          if (element.amount === 1) {
            const divRemove = document.getElementById(`divRemove${name}`)
            divRemove!.style.animation = 'praga 1s'
            setTimeout(() => {
              divRemove!.style.animation = ''
            }, 1000)
          } else {
            const newAmount = cartCoffees!.map((element) => {
              if (element.name === name) {
                return { ...element, amount: element.amount - 1 }
              }
              return element
            })
            setCartCoffees(newAmount)
          }
        }
      })
    }
  }

  function handleDelete(name: string) {
    const newCartCoffees = cartCoffees!.filter(
      (element) => element.name !== name,
    )
    setCartCoffees(newCartCoffees)
  }

  return (
    <ContainerSelectedCoffees>
      {cartCoffees!.length > 0 ? (
        cartCoffees!.map((coffee) => {
          const priceAmount = coffee.price * coffee.amount
          const price = `$${priceAmount.toFixed(2)}`
          return (
            <SelectedCoffees key={coffee.name}>
              <img src={coffee.img} alt="" />
              <div className="divInfoCoffee">
                <p>{coffee.nameNoFormated}</p>
                <div className="divAmount">
                  <div className="divMinusPlus">
                    <Minus
                      size={20}
                      onClick={() => amountOfCoffees('remove', coffee.name)}
                    />
                    <input
                      type="number"
                      value={coffee.amount}
                      min="1"
                      max="99"
                      disabled
                    />
                    <Plus
                      size={20}
                      onClick={() => amountOfCoffees('add', coffee.name)}
                    />
                  </div>
                  <div className="divRemove" id={`divRemove${coffee.name}`}>
                    <p onClick={() => handleDelete(coffee.name)}>
                      {' '}
                      <Trash color="#8047F8" size={15} /> Remover
                    </p>
                  </div>
                </div>
              </div>
              <p className="price">{price}</p>
            </SelectedCoffees>
          )
        })
      ) : (
        <p>Selecione Algum Café</p>
      )}
    </ContainerSelectedCoffees>
  )
}
