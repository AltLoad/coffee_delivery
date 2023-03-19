import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    svg {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme['yellow-light']};
      border-radius: 0.6rem;
      padding: 0.8rem;
      color: ${(props) => props.theme['yellow-dark']};
      position: relative;
    }

    span {
      position: absolute;
      right: 9.4rem;
      top: 2rem;
      color: white;
      background-color: ${(props) => props.theme['yellow-dark']};
      border-radius: 100rem;
      padding: 0.3rem;
      min-width: 2.4rem;
      min-height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
