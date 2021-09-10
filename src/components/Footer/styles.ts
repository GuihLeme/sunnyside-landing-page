import styled from "styled-components";

export const Container = styled.footer`
  background: var(--cyan-500);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  padding: 4rem 1.5rem;

  .logo {
    margin-bottom: 3.5rem;
  }

  svg {
    color: var(--cyan-900);
  }

  nav {
    display: flex;
    align-items: center;
    margin-bottom: 5.625rem;

    a {
      text-decoration: none;
      color: var(--cyan-900);

      transition: color .2s;

      &:not(:last-child) {
        margin-right: 3.375rem;
      }

      &:hover {
        color: var(--white);
      }
    }
  }

  .socials {
    margin-bottom: 1rem;

    a {
      transition: all .2s;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }

      &:hover {
        svg {
          color: white;
        }
      }
    }

  }


`
