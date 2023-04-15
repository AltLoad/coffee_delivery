import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 2.5vw 6.9444vw;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-block: 5vw;
  }

  @media screen and (max-width: 425px) {
    padding-block: 8vw;
  }
`
