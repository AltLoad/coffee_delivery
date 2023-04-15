import styled from 'styled-components'

export const CartContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(41rem, 1fr));
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
      grid-template-columns: 30% 50% 20%;
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
        width: 100%;
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

    @media screen and (max-width: 468px) {
      width: 88vw;
    }
  }

  .placeRed::placeholder {
    color: red;
  }

  .divPagamento {
    background-color: ${(props) => props.theme['base-card']};
    padding: 4rem;
    margin-top: 1.2rem;

    p:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    p:nth-child(2) {
      margin-left: 2.9rem;
      margin-top: 0.2rem;
      margin-bottom: 3.2rem;
    }

    .pagamentoButtons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(13rem, auto));
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;

      button {
        height: 5.1rem;
        border: none;
        font-size: 1.2rem;
        display: flex;
        gap: 1.2rem;
        align-items: center;
        background: #e6e5e5;
        border-radius: 0.6rem;
        padding: 1.6rem;
        color: #574f4d;

        &:hover {
          background-color: #ebe5f9;
          border: 1px solid #8047f8;
        }

        &.click {
          background-color: #ebe5f9;
          border: 1px solid #8047f8;
        }
      }
    }
  }

  @media screen and (max-width: 989px) {
    .section1 {
      order: 2;
    }

    .section2 {
      order: 1;
      margin-bottom: 5rem;
    }
  }

  @media screen and (max-width: 470px) {
    .section1 {
      width: 86.11vw;
    }

    .section2 {
      width: 86.11vw;
    }
  }
`
