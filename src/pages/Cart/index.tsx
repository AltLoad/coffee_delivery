import { useForm } from 'react-hook-form'
import { CartContainer } from './styles'
import axios from 'axios'
import { MapPinLine, Placeholder } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/GlobalContextProvider'
import { Coffee } from '../../components/Coffee'

export function Cart() {
  const { cartCoffees, setTotalItems } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState<Number | any>(0)
  const { register, handleSubmit, setValue, reset } = useForm()
  const prices: any = []
  const valueDelivery = 3
  const total = parseFloat(totalPrice) + valueDelivery

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
    alert('Mandou')
    setTotalItems(total.toFixed(2))
    reset()
    const inputs = document.querySelectorAll("input[type='text']")
    return inputs.forEach((input: any) => {
      // eslint-disable-next-line no-unused-expressions
      input.value === '' ? input.classList.remove('placeRed') : null
    })
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
        setValue('bairro', data.bairro)
        setValue('estado', data.uf)
        setValue('cidade', data.localidade)
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
