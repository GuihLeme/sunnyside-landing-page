import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.5rem;

    text-align: center;

    h1 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2.5rem;
    }

    p {
      line-height: 2rem;
      margin-bottom: 2.5rem;
      color: var(--gray-500)
    }

    a {
      font-family: 'Fraunces', serif;
      text-decoration: none;
      text-transform: uppercase;
      color: #000;
      font-size: 1.5rem;

      position: relative;

      &::after {
        content: '';

        height: .7rem;
        width: 110%;
        background: hsl(51, 100%, 80%);
        border-radius: 4px;

        position: absolute;
        top: 1.1rem;
        left: -0.5rem;
        z-index: -1;
      }
    }
  }
`
