import styled from 'styled-components'

export const HomeContainer = styled.main`
  position: relative;

  #divSuccess {
    position: fixed;
    bottom: 1rem;
    background-color: #484d50;
    border-radius: 1rem;
    color: white !important;
    height: 6rem;
    width: fit-content;
    padding: 1rem;
    text-align: center;
    box-shadow: 0rem 0rem 0rem 0rem red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'Baloo 2';
    font-weight: 700;

    .count {
      width: 100%;
      height: 0.3rem;
      background-color: green !important;
      animation-name: slidein;
      animation-duration: 5s;

      @keyframes slidein {
        from {
          width: 100%;
        }

        to {
          width: 0%;
        }
      }
    }
  }

  .presentation {
    display: flex;
    padding-block: 6rem;

    .text-home {
      h1 {
        font-size: 4.8rem;
        font-weight: 800;
        font-family: 'Baloo 2', sans-serif;
      }

      p {
        font-size: 2rem;
        font-weight: 400;
        margin-top: 5rem;
      }
    }

    .img-home {
      width: 90rem;
      img {
        width: 100%;
      }
    }
  }

  .info-home {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    figure {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }

      &:nth-child(1) {
        span {
          background-color: ${(props) => props.theme['yellow-dark']};
        }
      }

      &:nth-child(2) {
        span {
          background-color: ${(props) => props.theme['base-text']};
        }
      }

      &:nth-child(3) {
        span {
          background-color: ${(props) => props.theme.yellow};
        }
      }

      &:nth-child(4) {
        margin-left: -0.6rem;
        span {
          background-color: ${(props) => props.theme.purple};
        }
      }

      svg {
        color: ${(props) => props.theme.white};
      }

      figcaption {
        font-weight: 400;
        width: 14vw;
      }
    }
  }

  @media screen and (max-width: 1022px) {
    .text-home {
      text-align: center;
    }

    .info-home {
      grid-template-columns: repeat(2, minmax(23.5rem, 1fr));
      grid-row-gap: 2rem;

      figure {
        text-align: center;
        width: fit-content;
        margin: auto;

        figcaption {
          width: initial;
          white-space: nowrap;
          padding-left: 0;
        }

        &:nth-child(4) {
          margin-left: initial;

          figure {
            gap: initial;

            figcaption {
              white-space: nowrap;
            }
          }
        }

        &:nth-child(2) {
          margin-left: initial;

          figure {
            gap: initial;

            figcaption {
              white-space: nowrap;
            }
          }
        }
      }

      @media screen and (max-width: 600px) {
        grid: initial;

        figure {
          &:nth-child(4) {
            margin: auto;
          }

          &:nth-child(2) {
            margin: auto;
          }
        }
      }
    }

    .img-home {
      display: none !important;
      visibility: hidden !important;
    }
  }
`

export const CatalogContainer = styled.section`
  h2 {
    margin: 5rem 0 3rem 0;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    row-gap: 5rem;
    column-gap: 2rem;
  }
`

export const ProductContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  text-align: center;
  display: flex;
  align-items: flex-end;
  border-radius: 0.6rem 3.6rem;
  max-width: 25.6rem;
  padding: 2.4rem;
  position: relative;
  min-height: 31rem;
  margin: auto;

  .img-product {
    margin-bottom: 1.6rem;
    position: absolute;
    top: -2rem;
    left: 0;
    width: 100%;

    .types-products {
      display: flex;
      gap: 0.4rem;
      justify-content: center;

      p {
        background-color: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        padding: 0.4rem 0.8rem;
        border-radius: 10rem;
        margin-top: 1.2rem;
        width: fit-content;
      }
    }
  }

  .info-product {
    h3 {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }

    h3 + p {
      font-weight: 400;
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-label']};
      margin-bottom: 3.3rem;
    }

    .price-product {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      p {
        font-size: 1.4rem;
        span {
          font-size: 2.4rem;
          font-weight: 800;
          font-family: 'Baloo 2';
        }
      }

      .amount-coffee {
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
      }

      .amount-coffee + svg {
        background-color: ${(props) => props.theme['purple-dark']};
        color: white;
        padding: 0.8rem;
        border-radius: 0.6rem;

        &:hover {
          background-color: ${(props) => props.theme.purple};
          cursor: pointer;
        }
      }
    }
  }
`
