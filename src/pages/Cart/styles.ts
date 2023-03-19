import styled from 'styled-components'

export const CartContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  margin-top: 4rem;

  h1,
  h2 {
    font-size: 1.8rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  form {
    background-color: ${(props) => props.theme['base-card']};
    padding: 4rem;
    border-radius: 0.6rem;

    fieldset {
      display: grid;
      row-gap: 1.6rem;
      column-gap: 1.2rem;
      border: none;
      grid-template-columns: 30% 60% 10%;
      grid-template-areas:
        'CEP CEP CEP'
        'RUA RUA RUA'
        'N CO CO'
        'B CI U';

      legend {
        display: flex;
        gap: 0.8rem;
        margin-bottom: 3.2rem;

        span {
          font-size: 1.4rem;
          color: ${(props) => props.theme['base-subtitle']};
          display: flex;
          flex-direction: column;

          span {
            font-size: 1.6rem;
            color: ${(props) => props.theme['base-text']};
            margin-bottom: 0.2rem;
          }
        }
      }

      input {
        background-color: ${(props) => props.theme['base-button']};
        border: none;
        border-radius: 0.4rem;
        padding: 1.2rem;
        font-size: 1.4rem;
        color: ${(props) => props.theme['base-text']};
      }

      #cep {
        grid-area: CEP;
        width: 55.5%;
      }

      #logradouro {
        grid-area: RUA;
      }

      #numero {
        grid-area: N;
      }

      #complemento {
        grid-area: CO;
      }

      #bairro {
        grid-area: B;
      }

      #cidade {
        grid-area: CI;
      }

      #uf {
        grid-area: U;
      }
    }
  }

  .coffeesSelections {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 0.6rem 4.4rem;
    padding: 3rem;

    .total {
      margin-top: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      p {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 130%;
        color: #574f4d;
      }

      .totalDelivery {
        font-weight: 700;
        font-size: 2rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      button {
        padding: 12px 8px;

        background: #dbac2c;
        border-radius: 6px;
        border: none;
        color: white;
        margin-top: 1.2rem;

        &:hover:disabled {
          cursor: not-allowed;
        }

        &:hover:not(:disabled) {
          cursor: pointer;
          background: orange;
        }
      }
    }
  }

  .placeRed::placeholder {
    color: red;
  }
`
