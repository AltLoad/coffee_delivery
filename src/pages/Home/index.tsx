import React, { createContext, useContext, useEffect, useState } from 'react'
import { HomeContainer, ProductContainer, CatalogContainer } from './styles'
import imgCoffeHome from '../../assets/coffeHome.svg'
import {
  Coffee,
  Package,
  Timer,
  ShoppingCartSimple,
  Plus,
  Minus,
} from 'phosphor-react'
import apiCoffee from '../../apicoffes.json'
import { CartContext } from '../../contexts/GlobalContextProvider'
import { number } from 'zod'

interface Product {
  name: string
  amount: number
}

export function Home() {
  const { setCartCoffees, cartCoffees } = useContext(CartContext)

  const [amountCoffee, setAmountCoffee] = useState<any>([])

  function getAmountOfCoffee() {
    apiCoffee.forEach((element) => {
      const addNewCoffee = {
        name: element.name
          .replace(/\s/g, '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase(),
        amount: element.amount,
      }
      setAmountCoffee((prevState: any) => [...prevState, addNewCoffee])
    })
  }

  function getCoffees(nameProduct: string, price: number, img: string) {
    const nameFormated = nameProduct
      .replace(/\s/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

    const newCoffeeCart = {
      name: nameFormated,
      nameNoFormated: nameProduct,
      amount: 0,
      price,
      img,
    }

    amountCoffee.map((element: Product) =>
      element.name === nameFormated
        ? (newCoffeeCart.amount = element.amount)
        : null,
    )

    if (cartCoffees!.find((element) => element.name === nameFormated)) {
      const funcao = cartCoffees!.map((element) => {
        if (element.name === newCoffeeCart.name) {
          return {
            ...element,
            amount: element.amount + newCoffeeCart.amount,
          }
        }
        return element
      })

      setCartCoffees(funcao)
    } else {
      setCartCoffees((prevState: any) => [...prevState, newCoffeeCart])
    }

    const homeContainer = document.getElementById('homeContainer')
    const divSuccess = document.createElement('div')
    divSuccess.id = 'divSuccess'
    divSuccess.innerHTML =
      '<div>Café adicionado com sucesso</div> <div class="count"></div>'

    if (homeContainer!.lastChild?.nodeName !== 'SECTION') {
      homeContainer!.lastChild?.remove()
    }

    homeContainer!.appendChild(divSuccess)

    setTimeout(() => {
      homeContainer!.removeChild(divSuccess)
    }, 5000)
  }

  function amountOfCoffees(id: number, type: string, name: string) {
    const nameFormated = name
      .replace(/\s/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

    if (type === 'add') {
      const newAmount: any = amountCoffee.map((element: Product) => {
        if (element.name === nameFormated) {
          return { ...element, amount: element.amount + 1 }
        }
        return element
      })

      setAmountCoffee(newAmount)
    }
    if (type === 'remove') {
      if (amountCoffee[id].amount === 1) {
        alert('Não é possível remover mais um deste produto')
      } else {
        const newAmount: any = amountCoffee.map((element: Product) => {
          if (element.name === nameFormated) {
            return { ...element, amount: element.amount - 1 }
          }
          return element
        })

        setAmountCoffee(newAmount)
      }
    }
  }

  useEffect(() => {
    getAmountOfCoffee()
  }, [])

  return (
    <HomeContainer id="homeContainer">
      <div className="presentation">
        <div className="text-home">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="img-home">
          <img src={imgCoffeHome} alt="" />
        </div>
      </div>
      <div className="info-home">
        <figure>
          <span>
            <ShoppingCartSimple size={20} />
          </span>
          <figcaption>Compra simples e segura</figcaption>
        </figure>

        <figure>
          <span>
            <Package size={20} />
          </span>
          <figcaption>Embalagem mantém o café intacto</figcaption>
        </figure>

        <figure>
          <span>
            <Timer size={20} />
          </span>
          <figcaption>Entrega rápida e rastreada</figcaption>
        </figure>

        <figure>
          <span>
            <Coffee size={20} />
          </span>
          <figcaption>O café chega fresquinho até você</figcaption>
        </figure>
      </div>
      <CatalogContainer>
        <h2>Nossos Cafés</h2>
        <div className="products">
          {amountCoffee.length > 1
            ? apiCoffee.map((c) => (
                <ProductContainer key={c.id}>
                  <div className="img-product">
                    <img src={c.image} alt={c.name} />
                    <div className="types-products">
                      {c.type.map((t) => (
                        <p key={t}>{t}</p>
                      ))}
                    </div>
                  </div>
                  <div className="info-product">
                    <h3>{c.name}</h3>
                    <p>{c.description}</p>
                    <div className="price-product">
                      <p>
                        R$ <span>{c.value}</span>
                      </p>
                      <div className="amount-coffee">
                        <Minus
                          size={25}
                          onClick={() =>
                            amountOfCoffees(c.id, 'remove', c.name)
                          }
                        />
                        <input
                          type="number"
                          value={amountCoffee[c.id].amount}
                          id={`input${c.id}`}
                          min="1"
                          max="99"
                          disabled
                        />
                        <Plus
                          size={25}
                          onClick={() => amountOfCoffees(c.id, 'add', c.name)}
                        />
                      </div>
                      <ShoppingCartSimple
                        size={40}
                        onClick={(e) => getCoffees(c.name, c.value, c.image)}
                        key={`cart${c.id}`}
                      />
                    </div>
                  </div>
                </ProductContainer>
              ))
            : null}
        </div>
      </CatalogContainer>
    </HomeContainer>
  )
}
