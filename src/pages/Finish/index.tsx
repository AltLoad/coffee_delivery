import React, { useContext } from 'react'
import { CartContext } from '../../contexts/GlobalContextProvider'
import { DivContainer } from './styles'
import icon from '../../assets/iconFinish.svg'
import location from '../../assets/location.svg'
import timer from '../../assets/timer.svg'
import pagament from '../../assets/pagament.svg'

export function Fisish() {
  const logradouro = localStorage.getItem('logradouro')
  const numero = localStorage.getItem('logradouroNumero')
  const pagamento = localStorage.getItem('pagamento')
  const bairro = localStorage.getItem('bairro')
  const localidade = localStorage.getItem('localidade')
  const uf = localStorage.getItem('uf')

  return (
    <DivContainer>
      <div className="divH1">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div className="divImgInfos">
        <div>
          <figure>
            <img src={location} alt="" />
            <figcaption>
              Entrega em{' '}
              <span>
                {logradouro}, {numero}
              </span>{' '}
              <br />
              {bairro} - {localidade}, {uf}
            </figcaption>
          </figure>
          <figure>
            <img src={timer} alt="" />
            <figcaption>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </figcaption>
          </figure>
          <figure>
            <img src={pagament} alt="" />
            <figcaption>
              Pagamento na entrega <br />{' '}
              <span>
                {pagamento === 'credito'
                  ? 'Crédito'
                  : pagamento === 'dinheiro'
                  ? 'Dinheiro'
                  : 'Débito'}
              </span>
            </figcaption>
          </figure>
        </div>
        <img src={icon} alt="" />
      </div>
    </DivContainer>
  )
}
