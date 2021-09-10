import styled from "styled-components";
import { Desktop } from "../../styles/_breakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
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
        background: hsl(7, 99%, 90%);
        border-radius: 4px;

        position: absolute;
        top: 1.1rem;
        left: -0.5rem;
        z-index: -1;

        transition: background .2s;
      }

      &:hover {
        &::after {
          background: var(--red);
        }
      }
    }
  }

  @media ${Desktop()} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;

    img {
      width: 50%;
      height: 100%;
    }
  }
`
