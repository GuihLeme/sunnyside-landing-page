import styled from "styled-components";
import { Desktop } from "../../styles/_breakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.25rem 1.5rem ;

  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 50%;
      margin: 3rem 0 2.75rem;
    }

    p {
      text-align: center;
      color: var(--gray-900);
      line-height: 2rem;
      margin-bottom: 3rem;
    }

    strong {
      font-family: 'Fraunces', serif;
      font-weight: 900;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1rem;
      color: var(--gray-100);
      margin-bottom: 1.5rem;
    }
  }

  @media ${Desktop()} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;

    .testimonials {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .testimonial:not(:last-child) {
        margin-right: 3rem;
      }
    }


  }
`
