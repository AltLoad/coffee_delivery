import styled from 'styled-components'

export const DivContainer = styled.div`
  margin-top: 8rem;

  .divH1 {
    margin-bottom: 4rem;
    h1 {
      color: #c47f17;
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3.2rem;
      line-height: 130%;
      margin-bottom: 0.4rem;
    }

    p {
      color: #403937;
      font-stretch: 100;
      line-height: 130%;
      font-size: 2rem;
    }
  }

  .divImgInfos {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      border-radius: 0.6rem 3.6rem;
      border: 1px solid #a87fe3;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      width: 52.6rem;
      justify-content: center;

      figure {
        display: flex;
        gap: 1.2rem;

        figcaption {
          color: #574f4d;
          line-height: 130%;

          span {
            font-weight: 700;
          }
        }
      }
    }
  }
`
