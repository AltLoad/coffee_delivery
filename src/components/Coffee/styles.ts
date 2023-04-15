import styled from 'styled-components'

export const ContainerSelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const SelectedCoffees = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid #e6e5e5;
  align-items: center;
  gap: 1rem;

  .price {
    align-self: flex-start;
    margin-top: 0.1rem;
    font-weight: 700;
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  .divInfoCoffee {
    .divAmount {
      display: flex;
      gap: 0.8rem;
      margin-top: 0.8rem;

      .divMinusPlus {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        background-color: ${(props) => props.theme['base-button']};
        padding: 0.8rem;
        border-radius: 0.6rem;

        input {
          width: 2rem;
          background-color: transparent !important;
          border: none;
          text-align: center;
        }

        input[type='number']::-webkit-inner-spin-button {
          all: unset;
        }

        svg {
          color: ${(props) => props.theme.purple};
          cursor: pointer;

          &:hover {
            color: ${(props) => props.theme['purple-dark']};
          }
        }

        & + svg {
          background-color: ${(props) => props.theme['purple-dark']};
          color: white;
          padding: 0.8rem;
          border-radius: 0.6rem;

          &:hover {
            background-color: ${(props) => props.theme.purple};
          }
        }
      }

      .divRemove {
        background-color: ${(props) => props.theme['base-button']};
        padding: 0.8rem;
        border-radius: 0.6rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #574f4d;
        display: flex;
        justify-content: center;
        align-items: center;

        @keyframes praga {
          from {
            background-color: red;
            color: white;
          }

          to {
            background-color: ${(props) => props.theme['base-button']};
          }
        }

        &:hover {
          background-color: ${(props) => props.theme['base-hover']};
          cursor: pointer;
        }

        p {
          display: flex;
          gap: 0.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 989px) {
    .price {
      margin-left: auto;
    }
  }

  @media screen and (max-width: 470px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    .price {
      margin: auto;
    }

    div {
      width: fit-content;
    }
  }
`
