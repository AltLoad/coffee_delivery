import { useForm } from 'react-hook-form'
import { CartContainer } from './styles'
import axios from 'axios'
import { MapPinLine, Placeholder } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/GlobalContextProvider'
import { Coffee } from '../../components/Coffee'
import sifrao from '../../assets/sifrao.png'
import credito from '../../assets/credito.png'
import debito from '../../assets/debito.png'
import dinheiro from '../../assets/dinheiro.png'
import { useNavigate } from 'react-router-dom'

export function Cart() {
  const { cartCoffees, setTotalItems, setCartCoffees } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState<Number | any>(0)
  const { register, handleSubmit, setValue, reset } = useForm()
  const prices: any = []
  const valueDelivery = 3
  const total = parseFloat(totalPrice) + valueDelivery
  const divButtons = document.getElementsByClassName('pagamentoButtons') as any
  const navigate = useNavigate()

  const buttonActive = (e: any) => {
    const buttons = divButtons[0].children

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].value === e.target.value) {
        buttons[i].classList.add('click')
      } else {
        buttons[i].classList.remove('click')
      }
    }
  }

  cartCoffees!.forEach((cart) => {
    const priceAmount = cart.price * cart.amount
    const price = parseFloat(priceAmount.toFixed(2))
    prices.push(price)
    console.log(price)
  })

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
      sum += prices[i]
    }
    setTotalPrice(sum.toFixed(2))
  }, [prices])

  const onSubmit = (e: any) => {
    const valuePagament = document.getElementsByClassName('click') as any
    const numberHouse = document.getElementById('numero') as any
    setTotalItems(total.toFixed(2))
    localStorage.setItem('logradouroNumero', numberHouse.value)
    localStorage.setItem('pagamento', valuePagament[0].value)
    const inputs = document.querySelectorAll("input[type='text']")
    inputs.forEach((input: any) => {
      // eslint-disable-next-line no-unused-expressions
      input.value === '' ? input.classList.remove('placeRed') : null
    })
    reset()
    setCartCoffees([])
    navigate('/finish')
  }

  const checkCEP = (e: { target: { value: string } }) => {
    const cep = e.target.value.replace(/\D/g, '')
    if (cep !== '') {
      const url = `https://viacep.com.br/ws/${cep}/json/`
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json:charset=UTF-8',
        },
        data: JSON.stringify({
          a: 10,
          b: 20,
        }),
      }

      async function setInput(data: any) {
        setValue('logradouro', data.logradouro)
        localStorage.setItem('logradouro', data.logradouro)
        setValue('bairro', data.bairro)
        localStorage.setItem('bairro', data.bairro)
        setValue('estado', data.uf)
        localStorage.setItem('uf', data.uf)
        setValue('cidade', data.localidade)
        localStorage.setItem('localidade', data.localidade)
      }

      async function result() {
        const inputs = document.querySelectorAll("input[type='text']")
        return inputs.forEach((input: any) => {
          // eslint-disable-next-line no-unused-expressions
          input.value === '' ? input.classList.add('placeRed') : null
        })
      }

      const searchCep = async () => {
        const res = await axios(url, options)
        const data = await setInput(res.data)
        const check = await result()
      }

      searchCep()

      // axios(url, options)
      //   .then((res) => {
      //     setValue('logradouro', res.data.logradouro)
      //     setValue('bairro', res.data.bairro)
      //     setValue('uf', res.data.uf)
      //     setValue('cidade', res.data.localidade)
      //     console.log(res.data)
      //   })
      //   .then(() => {
      //     console.log(res.data)
      //   })
    }
  }

  return (
    <CartContainer>
      <section>
        <h1>Complete seu pedido</h1>

        <form id="formy" onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>
              <MapPinLine size={22} color={'orange'} />
              <span>
                <span>Endereço de Entrega</span> Informe o endereço onde deseja
                receber seu pedido
              </span>
            </legend>
            <input
              id="cep"
              type="text"
              required
              {...register('cep')}
              onBlur={checkCEP}
              placeholder={'CEP'}
            />

            <input
              id="logradouro"
              type="text"
              required
              {...register('logradouro')}
              placeholder={'Rua'}
            />

            <input
              id="numero"
              type="text"
              {...register('numero')}
              placeholder={'Número'}
            />

            <input
              id="complemento"
              type="text"
              {...register('complemento')}
              placeholder={'Complemento'}
            />

            <input
              id="bairro"
              type="text"
              required
              {...register('bairro')}
              placeholder={'Bairro'}
            />

            <input
              id="cidade"
              type="text"
              required
              {...register('cidade')}
              placeholder={'Cidade'}
            />

            <input
              id="uf"
              type="text"
              required
              {...register('estado')}
              placeholder={'UF'}
            />

            {/* <input type="submit" /> */}
          </fieldset>
        </form>

        <div className="divPagamento">
          <p>
            <img src={sifrao} alt="" />
            Pagamento
          </p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div className="pagamentoButtons">
            <button
              value="credito"
              onClick={(e) => buttonActive(e)}
              className="click"
            >
              <img src={credito} alt="" />
              CARTÃO DE CRÉDITO
            </button>

            <button value="debito" onClick={(e) => buttonActive(e)}>
              <img src={debito} alt="" />
              CARTÃO DE DÉBITO
            </button>

            <button value="dinheiro" onClick={(e) => buttonActive(e)}>
              <img src={dinheiro} alt="" />
              DINHEIRO
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <div className="coffeesSelections">
          <div>
            <Coffee />
          </div>
          <div className="total">
            <p>
              Total de itens <span>R$ {totalPrice}</span>
            </p>
            <p>
              Entrega <span>R$ {valueDelivery.toFixed(2)}</span>
            </p>
            <p className="totalDelivery">
              Total <span>R$ {total.toFixed(2)}</span>
            </p>
            <button form="formy" disabled={cartCoffees!.length < 1}>
              Confirmar Pedido
            </button>
          </div>
        </div>
      </section>
    </CartContainer>
  )
}
