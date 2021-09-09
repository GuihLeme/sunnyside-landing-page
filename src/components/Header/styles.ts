import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 2rem 0 9rem;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100vw - 3rem);
    margin: 0 auto;

    nav,
    input[type="checkbox"] {
      display: none;
      visibility: hidden;
    }

    input:checked ~ nav {
      visibility: visible;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 7rem;
      left: 50%;
      transform: translateX(-50%);

      background: var(--white);
      width: calc(100vw - 3rem);

      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 1.5rem 1.5rem;
        border-color: transparent transparent var(--white) transparent;
        position: absolute;
        top: -1.5rem;
        right: 0;
      }

      a {
        text-decoration: none;
        color: var(--gray-500);
        padding-top: 2.5rem;
      }

      button {
        background: var(--yellow);
        border: none;
        border-radius: 2rem;
        padding: 1rem;

        text-transform: uppercase;

        font-family: 'Fraunces', serif;
        font-weight: 900;

        margin: 2.25rem 0 2.5rem;
      }
    }
  }

  h1 {
    text-transform: uppercase;
    color: var(--white);
    font-size: 3rem;
    text-align: center;

    /* margin: 6.25rem 0 3.75rem; */

  }

`
